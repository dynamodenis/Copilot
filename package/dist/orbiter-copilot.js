import { Fragment as GR, h as Kl, reactive as qk, getCurrentInstance as Xk, Teleport as Zk, createApp as Jk, Comment as eD, Text as tD, defineComponent as nD, createBlock as rD, openBlock as aD, unref as iD } from "vue";
function KR(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
var ry = { exports: {} }, iv = {}, ay = { exports: {} }, Dt = {};
var RR;
function uD() {
  if (RR) return Dt;
  RR = 1;
  var y = /* @__PURE__ */ Symbol.for("react.element"), S = /* @__PURE__ */ Symbol.for("react.portal"), m = /* @__PURE__ */ Symbol.for("react.fragment"), w = /* @__PURE__ */ Symbol.for("react.strict_mode"), U = /* @__PURE__ */ Symbol.for("react.profiler"), T = /* @__PURE__ */ Symbol.for("react.provider"), v = /* @__PURE__ */ Symbol.for("react.context"), z = /* @__PURE__ */ Symbol.for("react.forward_ref"), O = /* @__PURE__ */ Symbol.for("react.suspense"), k = /* @__PURE__ */ Symbol.for("react.memo"), Y = /* @__PURE__ */ Symbol.for("react.lazy"), W = Symbol.iterator;
  function J(A) {
    return A === null || typeof A != "object" ? null : (A = W && A[W] || A["@@iterator"], typeof A == "function" ? A : null);
  }
  var Z = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ve = Object.assign, he = {};
  function Fe(A, G, Ge) {
    this.props = A, this.context = G, this.refs = he, this.updater = Ge || Z;
  }
  Fe.prototype.isReactComponent = {}, Fe.prototype.setState = function(A, G) {
    if (typeof A != "object" && typeof A != "function" && A != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, A, G, "setState");
  }, Fe.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function ot() {
  }
  ot.prototype = Fe.prototype;
  function Me(A, G, Ge) {
    this.props = A, this.context = G, this.refs = he, this.updater = Ge || Z;
  }
  var Ee = Me.prototype = new ot();
  Ee.constructor = Me, ve(Ee, Fe.prototype), Ee.isPureReactComponent = !0;
  var De = Array.isArray, pe = Object.prototype.hasOwnProperty, et = { current: null }, Be = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $e(A, G, Ge) {
    var Ne, vt = {}, Xe = null, xe = null;
    if (G != null) for (Ne in G.ref !== void 0 && (xe = G.ref), G.key !== void 0 && (Xe = "" + G.key), G) pe.call(G, Ne) && !Be.hasOwnProperty(Ne) && (vt[Ne] = G[Ne]);
    var it = arguments.length - 2;
    if (it === 1) vt.children = Ge;
    else if (1 < it) {
      for (var ft = Array(it), Wt = 0; Wt < it; Wt++) ft[Wt] = arguments[Wt + 2];
      vt.children = ft;
    }
    if (A && A.defaultProps) for (Ne in it = A.defaultProps, it) vt[Ne] === void 0 && (vt[Ne] = it[Ne]);
    return { $$typeof: y, type: A, key: Xe, ref: xe, props: vt, _owner: et.current };
  }
  function at(A, G) {
    return { $$typeof: y, type: A.type, key: G, ref: A.ref, props: A.props, _owner: A._owner };
  }
  function st(A) {
    return typeof A == "object" && A !== null && A.$$typeof === y;
  }
  function ct(A) {
    var G = { "=": "=0", ":": "=2" };
    return "$" + A.replace(/[=:]/g, function(Ge) {
      return G[Ge];
    });
  }
  var K = /\/+/g;
  function ee(A, G) {
    return typeof A == "object" && A !== null && A.key != null ? ct("" + A.key) : G.toString(36);
  }
  function Se(A, G, Ge, Ne, vt) {
    var Xe = typeof A;
    (Xe === "undefined" || Xe === "boolean") && (A = null);
    var xe = !1;
    if (A === null) xe = !0;
    else switch (Xe) {
      case "string":
      case "number":
        xe = !0;
        break;
      case "object":
        switch (A.$$typeof) {
          case y:
          case S:
            xe = !0;
        }
    }
    if (xe) return xe = A, vt = vt(xe), A = Ne === "" ? "." + ee(xe, 0) : Ne, De(vt) ? (Ge = "", A != null && (Ge = A.replace(K, "$&/") + "/"), Se(vt, G, Ge, "", function(Wt) {
      return Wt;
    })) : vt != null && (st(vt) && (vt = at(vt, Ge + (!vt.key || xe && xe.key === vt.key ? "" : ("" + vt.key).replace(K, "$&/") + "/") + A)), G.push(vt)), 1;
    if (xe = 0, Ne = Ne === "" ? "." : Ne + ":", De(A)) for (var it = 0; it < A.length; it++) {
      Xe = A[it];
      var ft = Ne + ee(Xe, it);
      xe += Se(Xe, G, Ge, ft, vt);
    }
    else if (ft = J(A), typeof ft == "function") for (A = ft.call(A), it = 0; !(Xe = A.next()).done; ) Xe = Xe.value, ft = Ne + ee(Xe, it++), xe += Se(Xe, G, Ge, ft, vt);
    else if (Xe === "object") throw G = String(A), Error("Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead.");
    return xe;
  }
  function je(A, G, Ge) {
    if (A == null) return A;
    var Ne = [], vt = 0;
    return Se(A, Ne, "", "", function(Xe) {
      return G.call(Ge, Xe, vt++);
    }), Ne;
  }
  function Re(A) {
    if (A._status === -1) {
      var G = A._result;
      G = G(), G.then(function(Ge) {
        (A._status === 0 || A._status === -1) && (A._status = 1, A._result = Ge);
      }, function(Ge) {
        (A._status === 0 || A._status === -1) && (A._status = 2, A._result = Ge);
      }), A._status === -1 && (A._status = 0, A._result = G);
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var me = { current: null }, te = { transition: null }, be = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: te, ReactCurrentOwner: et };
  function fe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Dt.Children = { map: je, forEach: function(A, G, Ge) {
    je(A, function() {
      G.apply(this, arguments);
    }, Ge);
  }, count: function(A) {
    var G = 0;
    return je(A, function() {
      G++;
    }), G;
  }, toArray: function(A) {
    return je(A, function(G) {
      return G;
    }) || [];
  }, only: function(A) {
    if (!st(A)) throw Error("React.Children.only expected to receive a single React element child.");
    return A;
  } }, Dt.Component = Fe, Dt.Fragment = m, Dt.Profiler = U, Dt.PureComponent = Me, Dt.StrictMode = w, Dt.Suspense = O, Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = be, Dt.act = fe, Dt.cloneElement = function(A, G, Ge) {
    if (A == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
    var Ne = ve({}, A.props), vt = A.key, Xe = A.ref, xe = A._owner;
    if (G != null) {
      if (G.ref !== void 0 && (Xe = G.ref, xe = et.current), G.key !== void 0 && (vt = "" + G.key), A.type && A.type.defaultProps) var it = A.type.defaultProps;
      for (ft in G) pe.call(G, ft) && !Be.hasOwnProperty(ft) && (Ne[ft] = G[ft] === void 0 && it !== void 0 ? it[ft] : G[ft]);
    }
    var ft = arguments.length - 2;
    if (ft === 1) Ne.children = Ge;
    else if (1 < ft) {
      it = Array(ft);
      for (var Wt = 0; Wt < ft; Wt++) it[Wt] = arguments[Wt + 2];
      Ne.children = it;
    }
    return { $$typeof: y, type: A.type, key: vt, ref: Xe, props: Ne, _owner: xe };
  }, Dt.createContext = function(A) {
    return A = { $$typeof: v, _currentValue: A, _currentValue2: A, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, A.Provider = { $$typeof: T, _context: A }, A.Consumer = A;
  }, Dt.createElement = $e, Dt.createFactory = function(A) {
    var G = $e.bind(null, A);
    return G.type = A, G;
  }, Dt.createRef = function() {
    return { current: null };
  }, Dt.forwardRef = function(A) {
    return { $$typeof: z, render: A };
  }, Dt.isValidElement = st, Dt.lazy = function(A) {
    return { $$typeof: Y, _payload: { _status: -1, _result: A }, _init: Re };
  }, Dt.memo = function(A, G) {
    return { $$typeof: k, type: A, compare: G === void 0 ? null : G };
  }, Dt.startTransition = function(A) {
    var G = te.transition;
    te.transition = {};
    try {
      A();
    } finally {
      te.transition = G;
    }
  }, Dt.unstable_act = fe, Dt.useCallback = function(A, G) {
    return me.current.useCallback(A, G);
  }, Dt.useContext = function(A) {
    return me.current.useContext(A);
  }, Dt.useDebugValue = function() {
  }, Dt.useDeferredValue = function(A) {
    return me.current.useDeferredValue(A);
  }, Dt.useEffect = function(A, G) {
    return me.current.useEffect(A, G);
  }, Dt.useId = function() {
    return me.current.useId();
  }, Dt.useImperativeHandle = function(A, G, Ge) {
    return me.current.useImperativeHandle(A, G, Ge);
  }, Dt.useInsertionEffect = function(A, G) {
    return me.current.useInsertionEffect(A, G);
  }, Dt.useLayoutEffect = function(A, G) {
    return me.current.useLayoutEffect(A, G);
  }, Dt.useMemo = function(A, G) {
    return me.current.useMemo(A, G);
  }, Dt.useReducer = function(A, G, Ge) {
    return me.current.useReducer(A, G, Ge);
  }, Dt.useRef = function(A) {
    return me.current.useRef(A);
  }, Dt.useState = function(A) {
    return me.current.useState(A);
  }, Dt.useSyncExternalStore = function(A, G, Ge) {
    return me.current.useSyncExternalStore(A, G, Ge);
  }, Dt.useTransition = function() {
    return me.current.useTransition();
  }, Dt.version = "18.3.1", Dt;
}
var ov = { exports: {} };
ov.exports;
var TR;
function lD() {
  return TR || (TR = 1, (function(y, S) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var m = "18.3.1", w = /* @__PURE__ */ Symbol.for("react.element"), U = /* @__PURE__ */ Symbol.for("react.portal"), T = /* @__PURE__ */ Symbol.for("react.fragment"), v = /* @__PURE__ */ Symbol.for("react.strict_mode"), z = /* @__PURE__ */ Symbol.for("react.profiler"), O = /* @__PURE__ */ Symbol.for("react.provider"), k = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), W = /* @__PURE__ */ Symbol.for("react.suspense"), J = /* @__PURE__ */ Symbol.for("react.suspense_list"), Z = /* @__PURE__ */ Symbol.for("react.memo"), ve = /* @__PURE__ */ Symbol.for("react.lazy"), he = /* @__PURE__ */ Symbol.for("react.offscreen"), Fe = Symbol.iterator, ot = "@@iterator";
      function Me(g) {
        if (g === null || typeof g != "object")
          return null;
        var b = Fe && g[Fe] || g[ot];
        return typeof b == "function" ? b : null;
      }
      var Ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, De = {
        transition: null
      }, pe = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, et = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Be = {}, $e = null;
      function at(g) {
        $e = g;
      }
      Be.setExtraStackFrame = function(g) {
        $e = g;
      }, Be.getCurrentStack = null, Be.getStackAddendum = function() {
        var g = "";
        $e && (g += $e);
        var b = Be.getCurrentStack;
        return b && (g += b() || ""), g;
      };
      var st = !1, ct = !1, K = !1, ee = !1, Se = !1, je = {
        ReactCurrentDispatcher: Ee,
        ReactCurrentBatchConfig: De,
        ReactCurrentOwner: et
      };
      je.ReactDebugCurrentFrame = Be, je.ReactCurrentActQueue = pe;
      function Re(g) {
        {
          for (var b = arguments.length, B = new Array(b > 1 ? b - 1 : 0), Q = 1; Q < b; Q++)
            B[Q - 1] = arguments[Q];
          te("warn", g, B);
        }
      }
      function me(g) {
        {
          for (var b = arguments.length, B = new Array(b > 1 ? b - 1 : 0), Q = 1; Q < b; Q++)
            B[Q - 1] = arguments[Q];
          te("error", g, B);
        }
      }
      function te(g, b, B) {
        {
          var Q = je.ReactDebugCurrentFrame, de = Q.getStackAddendum();
          de !== "" && (b += "%s", B = B.concat([de]));
          var Ze = B.map(function(_e) {
            return String(_e);
          });
          Ze.unshift("Warning: " + b), Function.prototype.apply.call(console[g], console, Ze);
        }
      }
      var be = {};
      function fe(g, b) {
        {
          var B = g.constructor, Q = B && (B.displayName || B.name) || "ReactClass", de = Q + "." + b;
          if (be[de])
            return;
          me("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", b, Q), be[de] = !0;
        }
      }
      var A = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(g) {
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
        enqueueForceUpdate: function(g, b, B) {
          fe(g, "forceUpdate");
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
        enqueueReplaceState: function(g, b, B, Q) {
          fe(g, "replaceState");
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
        enqueueSetState: function(g, b, B, Q) {
          fe(g, "setState");
        }
      }, G = Object.assign, Ge = {};
      Object.freeze(Ge);
      function Ne(g, b, B) {
        this.props = g, this.context = b, this.refs = Ge, this.updater = B || A;
      }
      Ne.prototype.isReactComponent = {}, Ne.prototype.setState = function(g, b) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, g, b, "setState");
      }, Ne.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      {
        var vt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Xe = function(g, b) {
          Object.defineProperty(Ne.prototype, g, {
            get: function() {
              Re("%s(...) is deprecated in plain JavaScript React classes. %s", b[0], b[1]);
            }
          });
        };
        for (var xe in vt)
          vt.hasOwnProperty(xe) && Xe(xe, vt[xe]);
      }
      function it() {
      }
      it.prototype = Ne.prototype;
      function ft(g, b, B) {
        this.props = g, this.context = b, this.refs = Ge, this.updater = B || A;
      }
      var Wt = ft.prototype = new it();
      Wt.constructor = ft, G(Wt, Ne.prototype), Wt.isPureReactComponent = !0;
      function On() {
        var g = {
          current: null
        };
        return Object.seal(g), g;
      }
      var br = Array.isArray;
      function En(g) {
        return br(g);
      }
      function rr(g) {
        {
          var b = typeof Symbol == "function" && Symbol.toStringTag, B = b && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return B;
        }
      }
      function Hn(g) {
        try {
          return Bn(g), !1;
        } catch {
          return !0;
        }
      }
      function Bn(g) {
        return "" + g;
      }
      function Wr(g) {
        if (Hn(g))
          return me("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(g)), Bn(g);
      }
      function fi(g, b, B) {
        var Q = g.displayName;
        if (Q)
          return Q;
        var de = b.displayName || b.name || "";
        return de !== "" ? B + "(" + de + ")" : B;
      }
      function ca(g) {
        return g.displayName || "Context";
      }
      function qn(g) {
        if (g == null)
          return null;
        if (typeof g.tag == "number" && me("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
          return g.displayName || g.name || null;
        if (typeof g == "string")
          return g;
        switch (g) {
          case T:
            return "Fragment";
          case U:
            return "Portal";
          case z:
            return "Profiler";
          case v:
            return "StrictMode";
          case W:
            return "Suspense";
          case J:
            return "SuspenseList";
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case k:
              var b = g;
              return ca(b) + ".Consumer";
            case O:
              var B = g;
              return ca(B._context) + ".Provider";
            case Y:
              return fi(g, g.render, "ForwardRef");
            case Z:
              var Q = g.displayName || null;
              return Q !== null ? Q : qn(g.type) || "Memo";
            case ve: {
              var de = g, Ze = de._payload, _e = de._init;
              try {
                return qn(_e(Ze));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Cn = Object.prototype.hasOwnProperty, In = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Sr, Wa, Ln;
      Ln = {};
      function _r(g) {
        if (Cn.call(g, "ref")) {
          var b = Object.getOwnPropertyDescriptor(g, "ref").get;
          if (b && b.isReactWarning)
            return !1;
        }
        return g.ref !== void 0;
      }
      function fa(g) {
        if (Cn.call(g, "key")) {
          var b = Object.getOwnPropertyDescriptor(g, "key").get;
          if (b && b.isReactWarning)
            return !1;
        }
        return g.key !== void 0;
      }
      function Qa(g, b) {
        var B = function() {
          Sr || (Sr = !0, me("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        B.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: B,
          configurable: !0
        });
      }
      function di(g, b) {
        var B = function() {
          Wa || (Wa = !0, me("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        B.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: B,
          configurable: !0
        });
      }
      function ye(g) {
        if (typeof g.ref == "string" && et.current && g.__self && et.current.stateNode !== g.__self) {
          var b = qn(et.current.type);
          Ln[b] || (me('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b, g.ref), Ln[b] = !0);
        }
      }
      var Ye = function(g, b, B, Q, de, Ze, _e) {
        var nt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: w,
          // Built-in properties that belong on the element
          type: g,
          key: b,
          ref: B,
          props: _e,
          // Record the component responsible for creating this element.
          _owner: Ze
        };
        return nt._store = {}, Object.defineProperty(nt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(nt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Q
        }), Object.defineProperty(nt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: de
        }), Object.freeze && (Object.freeze(nt.props), Object.freeze(nt)), nt;
      };
      function Ct(g, b, B) {
        var Q, de = {}, Ze = null, _e = null, nt = null, xt = null;
        if (b != null) {
          _r(b) && (_e = b.ref, ye(b)), fa(b) && (Wr(b.key), Ze = "" + b.key), nt = b.__self === void 0 ? null : b.__self, xt = b.__source === void 0 ? null : b.__source;
          for (Q in b)
            Cn.call(b, Q) && !In.hasOwnProperty(Q) && (de[Q] = b[Q]);
        }
        var Ut = arguments.length - 2;
        if (Ut === 1)
          de.children = B;
        else if (Ut > 1) {
          for (var un = Array(Ut), qt = 0; qt < Ut; qt++)
            un[qt] = arguments[qt + 2];
          Object.freeze && Object.freeze(un), de.children = un;
        }
        if (g && g.defaultProps) {
          var Rt = g.defaultProps;
          for (Q in Rt)
            de[Q] === void 0 && (de[Q] = Rt[Q]);
        }
        if (Ze || _e) {
          var Xt = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          Ze && Qa(de, Xt), _e && di(de, Xt);
        }
        return Ye(g, Ze, _e, nt, xt, et.current, de);
      }
      function It(g, b) {
        var B = Ye(g.type, b, g.ref, g._self, g._source, g._owner, g.props);
        return B;
      }
      function nn(g, b, B) {
        if (g == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
        var Q, de = G({}, g.props), Ze = g.key, _e = g.ref, nt = g._self, xt = g._source, Ut = g._owner;
        if (b != null) {
          _r(b) && (_e = b.ref, Ut = et.current), fa(b) && (Wr(b.key), Ze = "" + b.key);
          var un;
          g.type && g.type.defaultProps && (un = g.type.defaultProps);
          for (Q in b)
            Cn.call(b, Q) && !In.hasOwnProperty(Q) && (b[Q] === void 0 && un !== void 0 ? de[Q] = un[Q] : de[Q] = b[Q]);
        }
        var qt = arguments.length - 2;
        if (qt === 1)
          de.children = B;
        else if (qt > 1) {
          for (var Rt = Array(qt), Xt = 0; Xt < qt; Xt++)
            Rt[Xt] = arguments[Xt + 2];
          de.children = Rt;
        }
        return Ye(g.type, Ze, _e, nt, xt, Ut, de);
      }
      function vn(g) {
        return typeof g == "object" && g !== null && g.$$typeof === w;
      }
      var on = ".", Xn = ":";
      function rn(g) {
        var b = /[=:]/g, B = {
          "=": "=0",
          ":": "=2"
        }, Q = g.replace(b, function(de) {
          return B[de];
        });
        return "$" + Q;
      }
      var Qt = !1, Gt = /\/+/g;
      function da(g) {
        return g.replace(Gt, "$&/");
      }
      function Er(g, b) {
        return typeof g == "object" && g !== null && g.key != null ? (Wr(g.key), rn("" + g.key)) : b.toString(36);
      }
      function wa(g, b, B, Q, de) {
        var Ze = typeof g;
        (Ze === "undefined" || Ze === "boolean") && (g = null);
        var _e = !1;
        if (g === null)
          _e = !0;
        else
          switch (Ze) {
            case "string":
            case "number":
              _e = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case w:
                case U:
                  _e = !0;
              }
          }
        if (_e) {
          var nt = g, xt = de(nt), Ut = Q === "" ? on + Er(nt, 0) : Q;
          if (En(xt)) {
            var un = "";
            Ut != null && (un = da(Ut) + "/"), wa(xt, b, un, "", function(rd) {
              return rd;
            });
          } else xt != null && (vn(xt) && (xt.key && (!nt || nt.key !== xt.key) && Wr(xt.key), xt = It(
            xt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            B + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (xt.key && (!nt || nt.key !== xt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              da("" + xt.key) + "/"
            ) : "") + Ut
          )), b.push(xt));
          return 1;
        }
        var qt, Rt, Xt = 0, hn = Q === "" ? on : Q + Xn;
        if (En(g))
          for (var Tu = 0; Tu < g.length; Tu++)
            qt = g[Tu], Rt = hn + Er(qt, Tu), Xt += wa(qt, b, B, Rt, de);
        else {
          var Zo = Me(g);
          if (typeof Zo == "function") {
            var $i = g;
            Zo === $i.entries && (Qt || Re("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Qt = !0);
            for (var Jo = Zo.call($i), cl, nd = 0; !(cl = Jo.next()).done; )
              qt = cl.value, Rt = hn + Er(qt, nd++), Xt += wa(qt, b, B, Rt, de);
          } else if (Ze === "object") {
            var pc = String(g);
            throw new Error("Objects are not valid as a React child (found: " + (pc === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : pc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Xt;
      }
      function Hi(g, b, B) {
        if (g == null)
          return g;
        var Q = [], de = 0;
        return wa(g, Q, "", "", function(Ze) {
          return b.call(B, Ze, de++);
        }), Q;
      }
      function tl(g) {
        var b = 0;
        return Hi(g, function() {
          b++;
        }), b;
      }
      function nl(g, b, B) {
        Hi(g, function() {
          b.apply(this, arguments);
        }, B);
      }
      function hu(g) {
        return Hi(g, function(b) {
          return b;
        }) || [];
      }
      function mu(g) {
        if (!vn(g))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return g;
      }
      function rl(g) {
        var b = {
          $$typeof: k,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: g,
          _currentValue2: g,
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
        b.Provider = {
          $$typeof: O,
          _context: b
        };
        var B = !1, Q = !1, de = !1;
        {
          var Ze = {
            $$typeof: k,
            _context: b
          };
          Object.defineProperties(Ze, {
            Provider: {
              get: function() {
                return Q || (Q = !0, me("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), b.Provider;
              },
              set: function(_e) {
                b.Provider = _e;
              }
            },
            _currentValue: {
              get: function() {
                return b._currentValue;
              },
              set: function(_e) {
                b._currentValue = _e;
              }
            },
            _currentValue2: {
              get: function() {
                return b._currentValue2;
              },
              set: function(_e) {
                b._currentValue2 = _e;
              }
            },
            _threadCount: {
              get: function() {
                return b._threadCount;
              },
              set: function(_e) {
                b._threadCount = _e;
              }
            },
            Consumer: {
              get: function() {
                return B || (B = !0, me("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), b.Consumer;
              }
            },
            displayName: {
              get: function() {
                return b.displayName;
              },
              set: function(_e) {
                de || (Re("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", _e), de = !0);
              }
            }
          }), b.Consumer = Ze;
        }
        return b._currentRenderer = null, b._currentRenderer2 = null, b;
      }
      var xr = -1, kr = 0, ar = 1, pi = 2;
      function Ga(g) {
        if (g._status === xr) {
          var b = g._result, B = b();
          if (B.then(function(Ze) {
            if (g._status === kr || g._status === xr) {
              var _e = g;
              _e._status = ar, _e._result = Ze;
            }
          }, function(Ze) {
            if (g._status === kr || g._status === xr) {
              var _e = g;
              _e._status = pi, _e._result = Ze;
            }
          }), g._status === xr) {
            var Q = g;
            Q._status = kr, Q._result = B;
          }
        }
        if (g._status === ar) {
          var de = g._result;
          return de === void 0 && me(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, de), "default" in de || me(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, de), de.default;
        } else
          throw g._result;
      }
      function vi(g) {
        var b = {
          // We use these fields to store the result.
          _status: xr,
          _result: g
        }, B = {
          $$typeof: ve,
          _payload: b,
          _init: Ga
        };
        {
          var Q, de;
          Object.defineProperties(B, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return Q;
              },
              set: function(Ze) {
                me("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Q = Ze, Object.defineProperty(B, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return de;
              },
              set: function(Ze) {
                me("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), de = Ze, Object.defineProperty(B, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return B;
      }
      function hi(g) {
        g != null && g.$$typeof === Z ? me("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof g != "function" ? me("forwardRef requires a render function but was given %s.", g === null ? "null" : typeof g) : g.length !== 0 && g.length !== 2 && me("forwardRef render functions accept exactly two parameters: props and ref. %s", g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), g != null && (g.defaultProps != null || g.propTypes != null) && me("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var b = {
          $$typeof: Y,
          render: g
        };
        {
          var B;
          Object.defineProperty(b, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return B;
            },
            set: function(Q) {
              B = Q, !g.name && !g.displayName && (g.displayName = Q);
            }
          });
        }
        return b;
      }
      var x;
      x = /* @__PURE__ */ Symbol.for("react.module.reference");
      function re(g) {
        return !!(typeof g == "string" || typeof g == "function" || g === T || g === z || Se || g === v || g === W || g === J || ee || g === he || st || ct || K || typeof g == "object" && g !== null && (g.$$typeof === ve || g.$$typeof === Z || g.$$typeof === O || g.$$typeof === k || g.$$typeof === Y || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        g.$$typeof === x || g.getModuleId !== void 0));
      }
      function Ce(g, b) {
        re(g) || me("memo: The first argument must be a component. Instead received: %s", g === null ? "null" : typeof g);
        var B = {
          $$typeof: Z,
          type: g,
          compare: b === void 0 ? null : b
        };
        {
          var Q;
          Object.defineProperty(B, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Q;
            },
            set: function(de) {
              Q = de, !g.name && !g.displayName && (g.displayName = de);
            }
          });
        }
        return B;
      }
      function ze() {
        var g = Ee.current;
        return g === null && me(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), g;
      }
      function gt(g) {
        var b = ze();
        if (g._context !== void 0) {
          var B = g._context;
          B.Consumer === g ? me("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : B.Provider === g && me("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return b.useContext(g);
      }
      function ht(g) {
        var b = ze();
        return b.useState(g);
      }
      function bt(g, b, B) {
        var Q = ze();
        return Q.useReducer(g, b, B);
      }
      function Tt(g) {
        var b = ze();
        return b.useRef(g);
      }
      function Rn(g, b) {
        var B = ze();
        return B.useEffect(g, b);
      }
      function an(g, b) {
        var B = ze();
        return B.useInsertionEffect(g, b);
      }
      function sn(g, b) {
        var B = ze();
        return B.useLayoutEffect(g, b);
      }
      function ir(g, b) {
        var B = ze();
        return B.useCallback(g, b);
      }
      function Ka(g, b) {
        var B = ze();
        return B.useMemo(g, b);
      }
      function qa(g, b, B) {
        var Q = ze();
        return Q.useImperativeHandle(g, b, B);
      }
      function St(g, b) {
        {
          var B = ze();
          return B.useDebugValue(g, b);
        }
      }
      function Et() {
        var g = ze();
        return g.useTransition();
      }
      function Xa(g) {
        var b = ze();
        return b.useDeferredValue(g);
      }
      function al() {
        var g = ze();
        return g.useId();
      }
      function il(g, b, B) {
        var Q = ze();
        return Q.useSyncExternalStore(g, b, B);
      }
      var yu = 0, ql, gu, Qr, Go, Dr, fc, dc;
      function Xl() {
      }
      Xl.__reactDisabledLog = !0;
      function Su() {
        {
          if (yu === 0) {
            ql = console.log, gu = console.info, Qr = console.warn, Go = console.error, Dr = console.group, fc = console.groupCollapsed, dc = console.groupEnd;
            var g = {
              configurable: !0,
              enumerable: !0,
              value: Xl,
              writable: !0
            };
            Object.defineProperties(console, {
              info: g,
              log: g,
              warn: g,
              error: g,
              group: g,
              groupCollapsed: g,
              groupEnd: g
            });
          }
          yu++;
        }
      }
      function pa() {
        {
          if (yu--, yu === 0) {
            var g = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: G({}, g, {
                value: ql
              }),
              info: G({}, g, {
                value: gu
              }),
              warn: G({}, g, {
                value: Qr
              }),
              error: G({}, g, {
                value: Go
              }),
              group: G({}, g, {
                value: Dr
              }),
              groupCollapsed: G({}, g, {
                value: fc
              }),
              groupEnd: G({}, g, {
                value: dc
              })
            });
          }
          yu < 0 && me("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Za = je.ReactCurrentDispatcher, Ja;
      function Zl(g, b, B) {
        {
          if (Ja === void 0)
            try {
              throw Error();
            } catch (de) {
              var Q = de.stack.trim().match(/\n( *(at )?)/);
              Ja = Q && Q[1] || "";
            }
          return `
` + Ja + g;
        }
      }
      var ul = !1, _u;
      {
        var Jl = typeof WeakMap == "function" ? WeakMap : Map;
        _u = new Jl();
      }
      function eo(g, b) {
        if (!g || ul)
          return "";
        {
          var B = _u.get(g);
          if (B !== void 0)
            return B;
        }
        var Q;
        ul = !0;
        var de = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ze;
        Ze = Za.current, Za.current = null, Su();
        try {
          if (b) {
            var _e = function() {
              throw Error();
            };
            if (Object.defineProperty(_e.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(_e, []);
              } catch (hn) {
                Q = hn;
              }
              Reflect.construct(g, [], _e);
            } else {
              try {
                _e.call();
              } catch (hn) {
                Q = hn;
              }
              g.call(_e.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (hn) {
              Q = hn;
            }
            g();
          }
        } catch (hn) {
          if (hn && Q && typeof hn.stack == "string") {
            for (var nt = hn.stack.split(`
`), xt = Q.stack.split(`
`), Ut = nt.length - 1, un = xt.length - 1; Ut >= 1 && un >= 0 && nt[Ut] !== xt[un]; )
              un--;
            for (; Ut >= 1 && un >= 0; Ut--, un--)
              if (nt[Ut] !== xt[un]) {
                if (Ut !== 1 || un !== 1)
                  do
                    if (Ut--, un--, un < 0 || nt[Ut] !== xt[un]) {
                      var qt = `
` + nt[Ut].replace(" at new ", " at ");
                      return g.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", g.displayName)), typeof g == "function" && _u.set(g, qt), qt;
                    }
                  while (Ut >= 1 && un >= 0);
                break;
              }
          }
        } finally {
          ul = !1, Za.current = Ze, pa(), Error.prepareStackTrace = de;
        }
        var Rt = g ? g.displayName || g.name : "", Xt = Rt ? Zl(Rt) : "";
        return typeof g == "function" && _u.set(g, Xt), Xt;
      }
      function Bi(g, b, B) {
        return eo(g, !1);
      }
      function ed(g) {
        var b = g.prototype;
        return !!(b && b.isReactComponent);
      }
      function Ii(g, b, B) {
        if (g == null)
          return "";
        if (typeof g == "function")
          return eo(g, ed(g));
        if (typeof g == "string")
          return Zl(g);
        switch (g) {
          case W:
            return Zl("Suspense");
          case J:
            return Zl("SuspenseList");
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case Y:
              return Bi(g.render);
            case Z:
              return Ii(g.type, b, B);
            case ve: {
              var Q = g, de = Q._payload, Ze = Q._init;
              try {
                return Ii(Ze(de), b, B);
              } catch {
              }
            }
          }
        return "";
      }
      var jt = {}, to = je.ReactDebugCurrentFrame;
      function At(g) {
        if (g) {
          var b = g._owner, B = Ii(g.type, g._source, b ? b.type : null);
          to.setExtraStackFrame(B);
        } else
          to.setExtraStackFrame(null);
      }
      function Ko(g, b, B, Q, de) {
        {
          var Ze = Function.call.bind(Cn);
          for (var _e in g)
            if (Ze(g, _e)) {
              var nt = void 0;
              try {
                if (typeof g[_e] != "function") {
                  var xt = Error((Q || "React class") + ": " + B + " type `" + _e + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[_e] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw xt.name = "Invariant Violation", xt;
                }
                nt = g[_e](b, _e, Q, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ut) {
                nt = Ut;
              }
              nt && !(nt instanceof Error) && (At(de), me("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Q || "React class", B, _e, typeof nt), At(null)), nt instanceof Error && !(nt.message in jt) && (jt[nt.message] = !0, At(de), me("Failed %s type: %s", B, nt.message), At(null));
            }
        }
      }
      function mi(g) {
        if (g) {
          var b = g._owner, B = Ii(g.type, g._source, b ? b.type : null);
          at(B);
        } else
          at(null);
      }
      var pt;
      pt = !1;
      function no() {
        if (et.current) {
          var g = qn(et.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
      function ur(g) {
        if (g !== void 0) {
          var b = g.fileName.replace(/^.*[\\\/]/, ""), B = g.lineNumber;
          return `

Check your code at ` + b + ":" + B + ".";
        }
        return "";
      }
      function yi(g) {
        return g != null ? ur(g.__source) : "";
      }
      var Or = {};
      function gi(g) {
        var b = no();
        if (!b) {
          var B = typeof g == "string" ? g : g.displayName || g.name;
          B && (b = `

Check the top-level render call using <` + B + ">.");
        }
        return b;
      }
      function cn(g, b) {
        if (!(!g._store || g._store.validated || g.key != null)) {
          g._store.validated = !0;
          var B = gi(b);
          if (!Or[B]) {
            Or[B] = !0;
            var Q = "";
            g && g._owner && g._owner !== et.current && (Q = " It was passed a child from " + qn(g._owner.type) + "."), mi(g), me('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, Q), mi(null);
          }
        }
      }
      function Kt(g, b) {
        if (typeof g == "object") {
          if (En(g))
            for (var B = 0; B < g.length; B++) {
              var Q = g[B];
              vn(Q) && cn(Q, b);
            }
          else if (vn(g))
            g._store && (g._store.validated = !0);
          else if (g) {
            var de = Me(g);
            if (typeof de == "function" && de !== g.entries)
              for (var Ze = de.call(g), _e; !(_e = Ze.next()).done; )
                vn(_e.value) && cn(_e.value, b);
          }
        }
      }
      function Eu(g) {
        {
          var b = g.type;
          if (b == null || typeof b == "string")
            return;
          var B;
          if (typeof b == "function")
            B = b.propTypes;
          else if (typeof b == "object" && (b.$$typeof === Y || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          b.$$typeof === Z))
            B = b.propTypes;
          else
            return;
          if (B) {
            var Q = qn(b);
            Ko(B, g.props, "prop", Q, g);
          } else if (b.PropTypes !== void 0 && !pt) {
            pt = !0;
            var de = qn(b);
            me("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
          }
          typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && me("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function $n(g) {
        {
          for (var b = Object.keys(g.props), B = 0; B < b.length; B++) {
            var Q = b[B];
            if (Q !== "children" && Q !== "key") {
              mi(g), me("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Q), mi(null);
              break;
            }
          }
          g.ref !== null && (mi(g), me("Invalid attribute `ref` supplied to `React.Fragment`."), mi(null));
        }
      }
      function Lr(g, b, B) {
        var Q = re(g);
        if (!Q) {
          var de = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ze = yi(b);
          Ze ? de += Ze : de += no();
          var _e;
          g === null ? _e = "null" : En(g) ? _e = "array" : g !== void 0 && g.$$typeof === w ? (_e = "<" + (qn(g.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : _e = typeof g, me("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _e, de);
        }
        var nt = Ct.apply(this, arguments);
        if (nt == null)
          return nt;
        if (Q)
          for (var xt = 2; xt < arguments.length; xt++)
            Kt(arguments[xt], g);
        return g === T ? $n(nt) : Eu(nt), nt;
      }
      var ba = !1;
      function ll(g) {
        var b = Lr.bind(null, g);
        return b.type = g, ba || (ba = !0, Re("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(b, "type", {
          enumerable: !1,
          get: function() {
            return Re("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: g
            }), g;
          }
        }), b;
      }
      function qo(g, b, B) {
        for (var Q = nn.apply(this, arguments), de = 2; de < arguments.length; de++)
          Kt(arguments[de], Q.type);
        return Eu(Q), Q;
      }
      function Xo(g, b) {
        var B = De.transition;
        De.transition = {};
        var Q = De.transition;
        De.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          g();
        } finally {
          if (De.transition = B, B === null && Q._updatedFibers) {
            var de = Q._updatedFibers.size;
            de > 10 && Re("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Q._updatedFibers.clear();
          }
        }
      }
      var Cu = !1, ol = null;
      function td(g) {
        if (ol === null)
          try {
            var b = ("require" + Math.random()).slice(0, 7), B = y && y[b];
            ol = B.call(y, "timers").setImmediate;
          } catch {
            ol = function(de) {
              Cu === !1 && (Cu = !0, typeof MessageChannel > "u" && me("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ze = new MessageChannel();
              Ze.port1.onmessage = de, Ze.port2.postMessage(void 0);
            };
          }
        return ol(g);
      }
      var xa = 0, ei = !1;
      function Si(g) {
        {
          var b = xa;
          xa++, pe.current === null && (pe.current = []);
          var B = pe.isBatchingLegacy, Q;
          try {
            if (pe.isBatchingLegacy = !0, Q = g(), !B && pe.didScheduleLegacyUpdate) {
              var de = pe.current;
              de !== null && (pe.didScheduleLegacyUpdate = !1, Ru(de));
            }
          } catch (Rt) {
            throw ka(b), Rt;
          } finally {
            pe.isBatchingLegacy = B;
          }
          if (Q !== null && typeof Q == "object" && typeof Q.then == "function") {
            var Ze = Q, _e = !1, nt = {
              then: function(Rt, Xt) {
                _e = !0, Ze.then(function(hn) {
                  ka(b), xa === 0 ? ro(hn, Rt, Xt) : Rt(hn);
                }, function(hn) {
                  ka(b), Xt(hn);
                });
              }
            };
            return !ei && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              _e || (ei = !0, me("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), nt;
          } else {
            var xt = Q;
            if (ka(b), xa === 0) {
              var Ut = pe.current;
              Ut !== null && (Ru(Ut), pe.current = null);
              var un = {
                then: function(Rt, Xt) {
                  pe.current === null ? (pe.current = [], ro(xt, Rt, Xt)) : Rt(xt);
                }
              };
              return un;
            } else {
              var qt = {
                then: function(Rt, Xt) {
                  Rt(xt);
                }
              };
              return qt;
            }
          }
        }
      }
      function ka(g) {
        g !== xa - 1 && me("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), xa = g;
      }
      function ro(g, b, B) {
        {
          var Q = pe.current;
          if (Q !== null)
            try {
              Ru(Q), td(function() {
                Q.length === 0 ? (pe.current = null, b(g)) : ro(g, b, B);
              });
            } catch (de) {
              B(de);
            }
          else
            b(g);
        }
      }
      var ao = !1;
      function Ru(g) {
        if (!ao) {
          ao = !0;
          var b = 0;
          try {
            for (; b < g.length; b++) {
              var B = g[b];
              do
                B = B(!0);
              while (B !== null);
            }
            g.length = 0;
          } catch (Q) {
            throw g = g.slice(b + 1), Q;
          } finally {
            ao = !1;
          }
        }
      }
      var sl = Lr, io = qo, uo = ll, ti = {
        map: Hi,
        forEach: nl,
        count: tl,
        toArray: hu,
        only: mu
      };
      S.Children = ti, S.Component = Ne, S.Fragment = T, S.Profiler = z, S.PureComponent = ft, S.StrictMode = v, S.Suspense = W, S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = je, S.act = Si, S.cloneElement = io, S.createContext = rl, S.createElement = sl, S.createFactory = uo, S.createRef = On, S.forwardRef = hi, S.isValidElement = vn, S.lazy = vi, S.memo = Ce, S.startTransition = Xo, S.unstable_act = Si, S.useCallback = ir, S.useContext = gt, S.useDebugValue = St, S.useDeferredValue = Xa, S.useEffect = Rn, S.useId = al, S.useImperativeHandle = qa, S.useInsertionEffect = an, S.useLayoutEffect = sn, S.useMemo = Ka, S.useReducer = bt, S.useRef = Tt, S.useState = ht, S.useSyncExternalStore = il, S.useTransition = Et, S.version = m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(ov, ov.exports)), ov.exports;
}
var wR;
function sv() {
  return wR || (wR = 1, process.env.NODE_ENV === "production" ? ay.exports = uD() : ay.exports = lD()), ay.exports;
}
var bR;
function oD() {
  if (bR) return iv;
  bR = 1;
  var y = sv(), S = /* @__PURE__ */ Symbol.for("react.element"), m = /* @__PURE__ */ Symbol.for("react.fragment"), w = Object.prototype.hasOwnProperty, U = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(z, O, k) {
    var Y, W = {}, J = null, Z = null;
    k !== void 0 && (J = "" + k), O.key !== void 0 && (J = "" + O.key), O.ref !== void 0 && (Z = O.ref);
    for (Y in O) w.call(O, Y) && !T.hasOwnProperty(Y) && (W[Y] = O[Y]);
    if (z && z.defaultProps) for (Y in O = z.defaultProps, O) W[Y] === void 0 && (W[Y] = O[Y]);
    return { $$typeof: S, type: z, key: J, ref: Z, props: W, _owner: U.current };
  }
  return iv.Fragment = m, iv.jsx = v, iv.jsxs = v, iv;
}
var uv = {};
var xR;
function sD() {
  return xR || (xR = 1, process.env.NODE_ENV !== "production" && (function() {
    var y = sv(), S = /* @__PURE__ */ Symbol.for("react.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), w = /* @__PURE__ */ Symbol.for("react.fragment"), U = /* @__PURE__ */ Symbol.for("react.strict_mode"), T = /* @__PURE__ */ Symbol.for("react.profiler"), v = /* @__PURE__ */ Symbol.for("react.provider"), z = /* @__PURE__ */ Symbol.for("react.context"), O = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), Y = /* @__PURE__ */ Symbol.for("react.suspense_list"), W = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), Z = /* @__PURE__ */ Symbol.for("react.offscreen"), ve = Symbol.iterator, he = "@@iterator";
    function Fe(x) {
      if (x === null || typeof x != "object")
        return null;
      var re = ve && x[ve] || x[he];
      return typeof re == "function" ? re : null;
    }
    var ot = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Me(x) {
      {
        for (var re = arguments.length, Ce = new Array(re > 1 ? re - 1 : 0), ze = 1; ze < re; ze++)
          Ce[ze - 1] = arguments[ze];
        Ee("error", x, Ce);
      }
    }
    function Ee(x, re, Ce) {
      {
        var ze = ot.ReactDebugCurrentFrame, gt = ze.getStackAddendum();
        gt !== "" && (re += "%s", Ce = Ce.concat([gt]));
        var ht = Ce.map(function(bt) {
          return String(bt);
        });
        ht.unshift("Warning: " + re), Function.prototype.apply.call(console[x], console, ht);
      }
    }
    var De = !1, pe = !1, et = !1, Be = !1, $e = !1, at;
    at = /* @__PURE__ */ Symbol.for("react.module.reference");
    function st(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === w || x === T || $e || x === U || x === k || x === Y || Be || x === Z || De || pe || et || typeof x == "object" && x !== null && (x.$$typeof === J || x.$$typeof === W || x.$$typeof === v || x.$$typeof === z || x.$$typeof === O || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === at || x.getModuleId !== void 0));
    }
    function ct(x, re, Ce) {
      var ze = x.displayName;
      if (ze)
        return ze;
      var gt = re.displayName || re.name || "";
      return gt !== "" ? Ce + "(" + gt + ")" : Ce;
    }
    function K(x) {
      return x.displayName || "Context";
    }
    function ee(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && Me("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case w:
          return "Fragment";
        case m:
          return "Portal";
        case T:
          return "Profiler";
        case U:
          return "StrictMode";
        case k:
          return "Suspense";
        case Y:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case z:
            var re = x;
            return K(re) + ".Consumer";
          case v:
            var Ce = x;
            return K(Ce._context) + ".Provider";
          case O:
            return ct(x, x.render, "ForwardRef");
          case W:
            var ze = x.displayName || null;
            return ze !== null ? ze : ee(x.type) || "Memo";
          case J: {
            var gt = x, ht = gt._payload, bt = gt._init;
            try {
              return ee(bt(ht));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Se = Object.assign, je = 0, Re, me, te, be, fe, A, G;
    function Ge() {
    }
    Ge.__reactDisabledLog = !0;
    function Ne() {
      {
        if (je === 0) {
          Re = console.log, me = console.info, te = console.warn, be = console.error, fe = console.group, A = console.groupCollapsed, G = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: Ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        je++;
      }
    }
    function vt() {
      {
        if (je--, je === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Se({}, x, {
              value: Re
            }),
            info: Se({}, x, {
              value: me
            }),
            warn: Se({}, x, {
              value: te
            }),
            error: Se({}, x, {
              value: be
            }),
            group: Se({}, x, {
              value: fe
            }),
            groupCollapsed: Se({}, x, {
              value: A
            }),
            groupEnd: Se({}, x, {
              value: G
            })
          });
        }
        je < 0 && Me("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xe = ot.ReactCurrentDispatcher, xe;
    function it(x, re, Ce) {
      {
        if (xe === void 0)
          try {
            throw Error();
          } catch (gt) {
            var ze = gt.stack.trim().match(/\n( *(at )?)/);
            xe = ze && ze[1] || "";
          }
        return `
` + xe + x;
      }
    }
    var ft = !1, Wt;
    {
      var On = typeof WeakMap == "function" ? WeakMap : Map;
      Wt = new On();
    }
    function br(x, re) {
      if (!x || ft)
        return "";
      {
        var Ce = Wt.get(x);
        if (Ce !== void 0)
          return Ce;
      }
      var ze;
      ft = !0;
      var gt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ht;
      ht = Xe.current, Xe.current = null, Ne();
      try {
        if (re) {
          var bt = function() {
            throw Error();
          };
          if (Object.defineProperty(bt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(bt, []);
            } catch (St) {
              ze = St;
            }
            Reflect.construct(x, [], bt);
          } else {
            try {
              bt.call();
            } catch (St) {
              ze = St;
            }
            x.call(bt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (St) {
            ze = St;
          }
          x();
        }
      } catch (St) {
        if (St && ze && typeof St.stack == "string") {
          for (var Tt = St.stack.split(`
`), Rn = ze.stack.split(`
`), an = Tt.length - 1, sn = Rn.length - 1; an >= 1 && sn >= 0 && Tt[an] !== Rn[sn]; )
            sn--;
          for (; an >= 1 && sn >= 0; an--, sn--)
            if (Tt[an] !== Rn[sn]) {
              if (an !== 1 || sn !== 1)
                do
                  if (an--, sn--, sn < 0 || Tt[an] !== Rn[sn]) {
                    var ir = `
` + Tt[an].replace(" at new ", " at ");
                    return x.displayName && ir.includes("<anonymous>") && (ir = ir.replace("<anonymous>", x.displayName)), typeof x == "function" && Wt.set(x, ir), ir;
                  }
                while (an >= 1 && sn >= 0);
              break;
            }
        }
      } finally {
        ft = !1, Xe.current = ht, vt(), Error.prepareStackTrace = gt;
      }
      var Ka = x ? x.displayName || x.name : "", qa = Ka ? it(Ka) : "";
      return typeof x == "function" && Wt.set(x, qa), qa;
    }
    function En(x, re, Ce) {
      return br(x, !1);
    }
    function rr(x) {
      var re = x.prototype;
      return !!(re && re.isReactComponent);
    }
    function Hn(x, re, Ce) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return br(x, rr(x));
      if (typeof x == "string")
        return it(x);
      switch (x) {
        case k:
          return it("Suspense");
        case Y:
          return it("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case O:
            return En(x.render);
          case W:
            return Hn(x.type, re, Ce);
          case J: {
            var ze = x, gt = ze._payload, ht = ze._init;
            try {
              return Hn(ht(gt), re, Ce);
            } catch {
            }
          }
        }
      return "";
    }
    var Bn = Object.prototype.hasOwnProperty, Wr = {}, fi = ot.ReactDebugCurrentFrame;
    function ca(x) {
      if (x) {
        var re = x._owner, Ce = Hn(x.type, x._source, re ? re.type : null);
        fi.setExtraStackFrame(Ce);
      } else
        fi.setExtraStackFrame(null);
    }
    function qn(x, re, Ce, ze, gt) {
      {
        var ht = Function.call.bind(Bn);
        for (var bt in x)
          if (ht(x, bt)) {
            var Tt = void 0;
            try {
              if (typeof x[bt] != "function") {
                var Rn = Error((ze || "React class") + ": " + Ce + " type `" + bt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[bt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Rn.name = "Invariant Violation", Rn;
              }
              Tt = x[bt](re, bt, ze, Ce, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (an) {
              Tt = an;
            }
            Tt && !(Tt instanceof Error) && (ca(gt), Me("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ze || "React class", Ce, bt, typeof Tt), ca(null)), Tt instanceof Error && !(Tt.message in Wr) && (Wr[Tt.message] = !0, ca(gt), Me("Failed %s type: %s", Ce, Tt.message), ca(null));
          }
      }
    }
    var Cn = Array.isArray;
    function In(x) {
      return Cn(x);
    }
    function Sr(x) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, Ce = re && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return Ce;
      }
    }
    function Wa(x) {
      try {
        return Ln(x), !1;
      } catch {
        return !0;
      }
    }
    function Ln(x) {
      return "" + x;
    }
    function _r(x) {
      if (Wa(x))
        return Me("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(x)), Ln(x);
    }
    var fa = ot.ReactCurrentOwner, Qa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, di, ye;
    function Ye(x) {
      if (Bn.call(x, "ref")) {
        var re = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function Ct(x) {
      if (Bn.call(x, "key")) {
        var re = Object.getOwnPropertyDescriptor(x, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function It(x, re) {
      typeof x.ref == "string" && fa.current;
    }
    function nn(x, re) {
      {
        var Ce = function() {
          di || (di = !0, Me("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        Ce.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: Ce,
          configurable: !0
        });
      }
    }
    function vn(x, re) {
      {
        var Ce = function() {
          ye || (ye = !0, Me("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        Ce.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: Ce,
          configurable: !0
        });
      }
    }
    var on = function(x, re, Ce, ze, gt, ht, bt) {
      var Tt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: S,
        // Built-in properties that belong on the element
        type: x,
        key: re,
        ref: Ce,
        props: bt,
        // Record the component responsible for creating this element.
        _owner: ht
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
        value: ze
      }), Object.defineProperty(Tt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: gt
      }), Object.freeze && (Object.freeze(Tt.props), Object.freeze(Tt)), Tt;
    };
    function Xn(x, re, Ce, ze, gt) {
      {
        var ht, bt = {}, Tt = null, Rn = null;
        Ce !== void 0 && (_r(Ce), Tt = "" + Ce), Ct(re) && (_r(re.key), Tt = "" + re.key), Ye(re) && (Rn = re.ref, It(re, gt));
        for (ht in re)
          Bn.call(re, ht) && !Qa.hasOwnProperty(ht) && (bt[ht] = re[ht]);
        if (x && x.defaultProps) {
          var an = x.defaultProps;
          for (ht in an)
            bt[ht] === void 0 && (bt[ht] = an[ht]);
        }
        if (Tt || Rn) {
          var sn = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          Tt && nn(bt, sn), Rn && vn(bt, sn);
        }
        return on(x, Tt, Rn, gt, ze, fa.current, bt);
      }
    }
    var rn = ot.ReactCurrentOwner, Qt = ot.ReactDebugCurrentFrame;
    function Gt(x) {
      if (x) {
        var re = x._owner, Ce = Hn(x.type, x._source, re ? re.type : null);
        Qt.setExtraStackFrame(Ce);
      } else
        Qt.setExtraStackFrame(null);
    }
    var da;
    da = !1;
    function Er(x) {
      return typeof x == "object" && x !== null && x.$$typeof === S;
    }
    function wa() {
      {
        if (rn.current) {
          var x = ee(rn.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function Hi(x) {
      return "";
    }
    var tl = {};
    function nl(x) {
      {
        var re = wa();
        if (!re) {
          var Ce = typeof x == "string" ? x : x.displayName || x.name;
          Ce && (re = `

Check the top-level render call using <` + Ce + ">.");
        }
        return re;
      }
    }
    function hu(x, re) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var Ce = nl(re);
        if (tl[Ce])
          return;
        tl[Ce] = !0;
        var ze = "";
        x && x._owner && x._owner !== rn.current && (ze = " It was passed a child from " + ee(x._owner.type) + "."), Gt(x), Me('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ce, ze), Gt(null);
      }
    }
    function mu(x, re) {
      {
        if (typeof x != "object")
          return;
        if (In(x))
          for (var Ce = 0; Ce < x.length; Ce++) {
            var ze = x[Ce];
            Er(ze) && hu(ze, re);
          }
        else if (Er(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var gt = Fe(x);
          if (typeof gt == "function" && gt !== x.entries)
            for (var ht = gt.call(x), bt; !(bt = ht.next()).done; )
              Er(bt.value) && hu(bt.value, re);
        }
      }
    }
    function rl(x) {
      {
        var re = x.type;
        if (re == null || typeof re == "string")
          return;
        var Ce;
        if (typeof re == "function")
          Ce = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === O || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === W))
          Ce = re.propTypes;
        else
          return;
        if (Ce) {
          var ze = ee(re);
          qn(Ce, x.props, "prop", ze, x);
        } else if (re.PropTypes !== void 0 && !da) {
          da = !0;
          var gt = ee(re);
          Me("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", gt || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && Me("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xr(x) {
      {
        for (var re = Object.keys(x.props), Ce = 0; Ce < re.length; Ce++) {
          var ze = re[Ce];
          if (ze !== "children" && ze !== "key") {
            Gt(x), Me("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ze), Gt(null);
            break;
          }
        }
        x.ref !== null && (Gt(x), Me("Invalid attribute `ref` supplied to `React.Fragment`."), Gt(null));
      }
    }
    var kr = {};
    function ar(x, re, Ce, ze, gt, ht) {
      {
        var bt = st(x);
        if (!bt) {
          var Tt = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (Tt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Rn = Hi();
          Rn ? Tt += Rn : Tt += wa();
          var an;
          x === null ? an = "null" : In(x) ? an = "array" : x !== void 0 && x.$$typeof === S ? (an = "<" + (ee(x.type) || "Unknown") + " />", Tt = " Did you accidentally export a JSX literal instead of a component?") : an = typeof x, Me("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", an, Tt);
        }
        var sn = Xn(x, re, Ce, gt, ht);
        if (sn == null)
          return sn;
        if (bt) {
          var ir = re.children;
          if (ir !== void 0)
            if (ze)
              if (In(ir)) {
                for (var Ka = 0; Ka < ir.length; Ka++)
                  mu(ir[Ka], x);
                Object.freeze && Object.freeze(ir);
              } else
                Me("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mu(ir, x);
        }
        if (Bn.call(re, "key")) {
          var qa = ee(x), St = Object.keys(re).filter(function(al) {
            return al !== "key";
          }), Et = St.length > 0 ? "{key: someKey, " + St.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!kr[qa + Et]) {
            var Xa = St.length > 0 ? "{" + St.join(": ..., ") + ": ...}" : "{}";
            Me(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Et, qa, Xa, qa), kr[qa + Et] = !0;
          }
        }
        return x === w ? xr(sn) : rl(sn), sn;
      }
    }
    function pi(x, re, Ce) {
      return ar(x, re, Ce, !0);
    }
    function Ga(x, re, Ce) {
      return ar(x, re, Ce, !1);
    }
    var vi = Ga, hi = pi;
    uv.Fragment = w, uv.jsx = vi, uv.jsxs = hi;
  })()), uv;
}
var kR;
function cD() {
  return kR || (kR = 1, process.env.NODE_ENV === "production" ? ry.exports = oD() : ry.exports = sD()), ry.exports;
}
var fD = cD();
function dD() {
  return /* @__PURE__ */ fD.jsx("h1", { className: "copilot-heading", children: "Hello copilot" });
}
var Kn = sv();
const qR = /* @__PURE__ */ KR(Kn);
var iy = { exports: {} }, $a = {}, uy = { exports: {} }, L_ = {};
var DR;
function pD() {
  return DR || (DR = 1, (function(y) {
    function S(te, be) {
      var fe = te.length;
      te.push(be);
      e: for (; 0 < fe; ) {
        var A = fe - 1 >>> 1, G = te[A];
        if (0 < U(G, be)) te[A] = be, te[fe] = G, fe = A;
        else break e;
      }
    }
    function m(te) {
      return te.length === 0 ? null : te[0];
    }
    function w(te) {
      if (te.length === 0) return null;
      var be = te[0], fe = te.pop();
      if (fe !== be) {
        te[0] = fe;
        e: for (var A = 0, G = te.length, Ge = G >>> 1; A < Ge; ) {
          var Ne = 2 * (A + 1) - 1, vt = te[Ne], Xe = Ne + 1, xe = te[Xe];
          if (0 > U(vt, fe)) Xe < G && 0 > U(xe, vt) ? (te[A] = xe, te[Xe] = fe, A = Xe) : (te[A] = vt, te[Ne] = fe, A = Ne);
          else if (Xe < G && 0 > U(xe, fe)) te[A] = xe, te[Xe] = fe, A = Xe;
          else break e;
        }
      }
      return be;
    }
    function U(te, be) {
      var fe = te.sortIndex - be.sortIndex;
      return fe !== 0 ? fe : te.id - be.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var T = performance;
      y.unstable_now = function() {
        return T.now();
      };
    } else {
      var v = Date, z = v.now();
      y.unstable_now = function() {
        return v.now() - z;
      };
    }
    var O = [], k = [], Y = 1, W = null, J = 3, Z = !1, ve = !1, he = !1, Fe = typeof setTimeout == "function" ? setTimeout : null, ot = typeof clearTimeout == "function" ? clearTimeout : null, Me = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ee(te) {
      for (var be = m(k); be !== null; ) {
        if (be.callback === null) w(k);
        else if (be.startTime <= te) w(k), be.sortIndex = be.expirationTime, S(O, be);
        else break;
        be = m(k);
      }
    }
    function De(te) {
      if (he = !1, Ee(te), !ve) if (m(O) !== null) ve = !0, Re(pe);
      else {
        var be = m(k);
        be !== null && me(De, be.startTime - te);
      }
    }
    function pe(te, be) {
      ve = !1, he && (he = !1, ot($e), $e = -1), Z = !0;
      var fe = J;
      try {
        for (Ee(be), W = m(O); W !== null && (!(W.expirationTime > be) || te && !ct()); ) {
          var A = W.callback;
          if (typeof A == "function") {
            W.callback = null, J = W.priorityLevel;
            var G = A(W.expirationTime <= be);
            be = y.unstable_now(), typeof G == "function" ? W.callback = G : W === m(O) && w(O), Ee(be);
          } else w(O);
          W = m(O);
        }
        if (W !== null) var Ge = !0;
        else {
          var Ne = m(k);
          Ne !== null && me(De, Ne.startTime - be), Ge = !1;
        }
        return Ge;
      } finally {
        W = null, J = fe, Z = !1;
      }
    }
    var et = !1, Be = null, $e = -1, at = 5, st = -1;
    function ct() {
      return !(y.unstable_now() - st < at);
    }
    function K() {
      if (Be !== null) {
        var te = y.unstable_now();
        st = te;
        var be = !0;
        try {
          be = Be(!0, te);
        } finally {
          be ? ee() : (et = !1, Be = null);
        }
      } else et = !1;
    }
    var ee;
    if (typeof Me == "function") ee = function() {
      Me(K);
    };
    else if (typeof MessageChannel < "u") {
      var Se = new MessageChannel(), je = Se.port2;
      Se.port1.onmessage = K, ee = function() {
        je.postMessage(null);
      };
    } else ee = function() {
      Fe(K, 0);
    };
    function Re(te) {
      Be = te, et || (et = !0, ee());
    }
    function me(te, be) {
      $e = Fe(function() {
        te(y.unstable_now());
      }, be);
    }
    y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(te) {
      te.callback = null;
    }, y.unstable_continueExecution = function() {
      ve || Z || (ve = !0, Re(pe));
    }, y.unstable_forceFrameRate = function(te) {
      0 > te || 125 < te ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : at = 0 < te ? Math.floor(1e3 / te) : 5;
    }, y.unstable_getCurrentPriorityLevel = function() {
      return J;
    }, y.unstable_getFirstCallbackNode = function() {
      return m(O);
    }, y.unstable_next = function(te) {
      switch (J) {
        case 1:
        case 2:
        case 3:
          var be = 3;
          break;
        default:
          be = J;
      }
      var fe = J;
      J = be;
      try {
        return te();
      } finally {
        J = fe;
      }
    }, y.unstable_pauseExecution = function() {
    }, y.unstable_requestPaint = function() {
    }, y.unstable_runWithPriority = function(te, be) {
      switch (te) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          te = 3;
      }
      var fe = J;
      J = te;
      try {
        return be();
      } finally {
        J = fe;
      }
    }, y.unstable_scheduleCallback = function(te, be, fe) {
      var A = y.unstable_now();
      switch (typeof fe == "object" && fe !== null ? (fe = fe.delay, fe = typeof fe == "number" && 0 < fe ? A + fe : A) : fe = A, te) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return G = fe + G, te = { id: Y++, callback: be, priorityLevel: te, startTime: fe, expirationTime: G, sortIndex: -1 }, fe > A ? (te.sortIndex = fe, S(k, te), m(O) === null && te === m(k) && (he ? (ot($e), $e = -1) : he = !0, me(De, fe - A))) : (te.sortIndex = G, S(O, te), ve || Z || (ve = !0, Re(pe))), te;
    }, y.unstable_shouldYield = ct, y.unstable_wrapCallback = function(te) {
      var be = J;
      return function() {
        var fe = J;
        J = be;
        try {
          return te.apply(this, arguments);
        } finally {
          J = fe;
        }
      };
    };
  })(L_)), L_;
}
var M_ = {};
var OR;
function vD() {
  return OR || (OR = 1, (function(y) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var S = !1, m = 5;
      function w(ye, Ye) {
        var Ct = ye.length;
        ye.push(Ye), v(ye, Ye, Ct);
      }
      function U(ye) {
        return ye.length === 0 ? null : ye[0];
      }
      function T(ye) {
        if (ye.length === 0)
          return null;
        var Ye = ye[0], Ct = ye.pop();
        return Ct !== Ye && (ye[0] = Ct, z(ye, Ct, 0)), Ye;
      }
      function v(ye, Ye, Ct) {
        for (var It = Ct; It > 0; ) {
          var nn = It - 1 >>> 1, vn = ye[nn];
          if (O(vn, Ye) > 0)
            ye[nn] = Ye, ye[It] = vn, It = nn;
          else
            return;
        }
      }
      function z(ye, Ye, Ct) {
        for (var It = Ct, nn = ye.length, vn = nn >>> 1; It < vn; ) {
          var on = (It + 1) * 2 - 1, Xn = ye[on], rn = on + 1, Qt = ye[rn];
          if (O(Xn, Ye) < 0)
            rn < nn && O(Qt, Xn) < 0 ? (ye[It] = Qt, ye[rn] = Ye, It = rn) : (ye[It] = Xn, ye[on] = Ye, It = on);
          else if (rn < nn && O(Qt, Ye) < 0)
            ye[It] = Qt, ye[rn] = Ye, It = rn;
          else
            return;
        }
      }
      function O(ye, Ye) {
        var Ct = ye.sortIndex - Ye.sortIndex;
        return Ct !== 0 ? Ct : ye.id - Ye.id;
      }
      var k = 1, Y = 2, W = 3, J = 4, Z = 5;
      function ve(ye, Ye) {
      }
      var he = typeof performance == "object" && typeof performance.now == "function";
      if (he) {
        var Fe = performance;
        y.unstable_now = function() {
          return Fe.now();
        };
      } else {
        var ot = Date, Me = ot.now();
        y.unstable_now = function() {
          return ot.now() - Me;
        };
      }
      var Ee = 1073741823, De = -1, pe = 250, et = 5e3, Be = 1e4, $e = Ee, at = [], st = [], ct = 1, K = null, ee = W, Se = !1, je = !1, Re = !1, me = typeof setTimeout == "function" ? setTimeout : null, te = typeof clearTimeout == "function" ? clearTimeout : null, be = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function fe(ye) {
        for (var Ye = U(st); Ye !== null; ) {
          if (Ye.callback === null)
            T(st);
          else if (Ye.startTime <= ye)
            T(st), Ye.sortIndex = Ye.expirationTime, w(at, Ye);
          else
            return;
          Ye = U(st);
        }
      }
      function A(ye) {
        if (Re = !1, fe(ye), !je)
          if (U(at) !== null)
            je = !0, Ln(G);
          else {
            var Ye = U(st);
            Ye !== null && _r(A, Ye.startTime - ye);
          }
      }
      function G(ye, Ye) {
        je = !1, Re && (Re = !1, fa()), Se = !0;
        var Ct = ee;
        try {
          var It;
          if (!S) return Ge(ye, Ye);
        } finally {
          K = null, ee = Ct, Se = !1;
        }
      }
      function Ge(ye, Ye) {
        var Ct = Ye;
        for (fe(Ct), K = U(at); K !== null && !(K.expirationTime > Ct && (!ye || fi())); ) {
          var It = K.callback;
          if (typeof It == "function") {
            K.callback = null, ee = K.priorityLevel;
            var nn = K.expirationTime <= Ct, vn = It(nn);
            Ct = y.unstable_now(), typeof vn == "function" ? K.callback = vn : K === U(at) && T(at), fe(Ct);
          } else
            T(at);
          K = U(at);
        }
        if (K !== null)
          return !0;
        var on = U(st);
        return on !== null && _r(A, on.startTime - Ct), !1;
      }
      function Ne(ye, Ye) {
        switch (ye) {
          case k:
          case Y:
          case W:
          case J:
          case Z:
            break;
          default:
            ye = W;
        }
        var Ct = ee;
        ee = ye;
        try {
          return Ye();
        } finally {
          ee = Ct;
        }
      }
      function vt(ye) {
        var Ye;
        switch (ee) {
          case k:
          case Y:
          case W:
            Ye = W;
            break;
          default:
            Ye = ee;
            break;
        }
        var Ct = ee;
        ee = Ye;
        try {
          return ye();
        } finally {
          ee = Ct;
        }
      }
      function Xe(ye) {
        var Ye = ee;
        return function() {
          var Ct = ee;
          ee = Ye;
          try {
            return ye.apply(this, arguments);
          } finally {
            ee = Ct;
          }
        };
      }
      function xe(ye, Ye, Ct) {
        var It = y.unstable_now(), nn;
        if (typeof Ct == "object" && Ct !== null) {
          var vn = Ct.delay;
          typeof vn == "number" && vn > 0 ? nn = It + vn : nn = It;
        } else
          nn = It;
        var on;
        switch (ye) {
          case k:
            on = De;
            break;
          case Y:
            on = pe;
            break;
          case Z:
            on = $e;
            break;
          case J:
            on = Be;
            break;
          case W:
          default:
            on = et;
            break;
        }
        var Xn = nn + on, rn = {
          id: ct++,
          callback: Ye,
          priorityLevel: ye,
          startTime: nn,
          expirationTime: Xn,
          sortIndex: -1
        };
        return nn > It ? (rn.sortIndex = nn, w(st, rn), U(at) === null && rn === U(st) && (Re ? fa() : Re = !0, _r(A, nn - It))) : (rn.sortIndex = Xn, w(at, rn), !je && !Se && (je = !0, Ln(G))), rn;
      }
      function it() {
      }
      function ft() {
        !je && !Se && (je = !0, Ln(G));
      }
      function Wt() {
        return U(at);
      }
      function On(ye) {
        ye.callback = null;
      }
      function br() {
        return ee;
      }
      var En = !1, rr = null, Hn = -1, Bn = m, Wr = -1;
      function fi() {
        var ye = y.unstable_now() - Wr;
        return !(ye < Bn);
      }
      function ca() {
      }
      function qn(ye) {
        if (ye < 0 || ye > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ye > 0 ? Bn = Math.floor(1e3 / ye) : Bn = m;
      }
      var Cn = function() {
        if (rr !== null) {
          var ye = y.unstable_now();
          Wr = ye;
          var Ye = !0, Ct = !0;
          try {
            Ct = rr(Ye, ye);
          } finally {
            Ct ? In() : (En = !1, rr = null);
          }
        } else
          En = !1;
      }, In;
      if (typeof be == "function")
        In = function() {
          be(Cn);
        };
      else if (typeof MessageChannel < "u") {
        var Sr = new MessageChannel(), Wa = Sr.port2;
        Sr.port1.onmessage = Cn, In = function() {
          Wa.postMessage(null);
        };
      } else
        In = function() {
          me(Cn, 0);
        };
      function Ln(ye) {
        rr = ye, En || (En = !0, In());
      }
      function _r(ye, Ye) {
        Hn = me(function() {
          ye(y.unstable_now());
        }, Ye);
      }
      function fa() {
        te(Hn), Hn = -1;
      }
      var Qa = ca, di = null;
      y.unstable_IdlePriority = Z, y.unstable_ImmediatePriority = k, y.unstable_LowPriority = J, y.unstable_NormalPriority = W, y.unstable_Profiling = di, y.unstable_UserBlockingPriority = Y, y.unstable_cancelCallback = On, y.unstable_continueExecution = ft, y.unstable_forceFrameRate = qn, y.unstable_getCurrentPriorityLevel = br, y.unstable_getFirstCallbackNode = Wt, y.unstable_next = vt, y.unstable_pauseExecution = it, y.unstable_requestPaint = Qa, y.unstable_runWithPriority = Ne, y.unstable_scheduleCallback = xe, y.unstable_shouldYield = fi, y.unstable_wrapCallback = Xe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(M_)), M_;
}
var LR;
function XR() {
  return LR || (LR = 1, process.env.NODE_ENV === "production" ? uy.exports = pD() : uy.exports = vD()), uy.exports;
}
var MR;
function hD() {
  if (MR) return $a;
  MR = 1;
  var y = sv(), S = XR();
  function m(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, u = 1; u < arguments.length; u++) r += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var w = /* @__PURE__ */ new Set(), U = {};
  function T(n, r) {
    v(n, r), v(n + "Capture", r);
  }
  function v(n, r) {
    for (U[n] = r, n = 0; n < r.length; n++) w.add(r[n]);
  }
  var z = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), O = Object.prototype.hasOwnProperty, k = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Y = {}, W = {};
  function J(n) {
    return O.call(W, n) ? !0 : O.call(Y, n) ? !1 : k.test(n) ? W[n] = !0 : (Y[n] = !0, !1);
  }
  function Z(n, r, u, o) {
    if (u !== null && u.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : u !== null ? !u.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ve(n, r, u, o) {
    if (r === null || typeof r > "u" || Z(n, r, u, o)) return !0;
    if (o) return !1;
    if (u !== null) switch (u.type) {
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
  function he(n, r, u, o, c, d, _) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = u, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = _;
  }
  var Fe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Fe[n] = new he(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Fe[r] = new he(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Fe[n] = new he(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Fe[n] = new he(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Fe[n] = new he(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Fe[n] = new he(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Fe[n] = new he(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Fe[n] = new he(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Fe[n] = new he(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ot = /[\-:]([a-z])/g;
  function Me(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ot,
      Me
    );
    Fe[r] = new he(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ot, Me);
    Fe[r] = new he(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ot, Me);
    Fe[r] = new he(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Fe[n] = new he(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Fe.xlinkHref = new he("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Fe[n] = new he(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ee(n, r, u, o) {
    var c = Fe.hasOwnProperty(r) ? Fe[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ve(r, u, c, o) && (u = null), o || c === null ? J(r) && (u === null ? n.removeAttribute(r) : n.setAttribute(r, "" + u)) : c.mustUseProperty ? n[c.propertyName] = u === null ? c.type === 3 ? !1 : "" : u : (r = c.attributeName, o = c.attributeNamespace, u === null ? n.removeAttribute(r) : (c = c.type, u = c === 3 || c === 4 && u === !0 ? "" : "" + u, o ? n.setAttributeNS(o, r, u) : n.setAttribute(r, u))));
  }
  var De = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, pe = /* @__PURE__ */ Symbol.for("react.element"), et = /* @__PURE__ */ Symbol.for("react.portal"), Be = /* @__PURE__ */ Symbol.for("react.fragment"), $e = /* @__PURE__ */ Symbol.for("react.strict_mode"), at = /* @__PURE__ */ Symbol.for("react.profiler"), st = /* @__PURE__ */ Symbol.for("react.provider"), ct = /* @__PURE__ */ Symbol.for("react.context"), K = /* @__PURE__ */ Symbol.for("react.forward_ref"), ee = /* @__PURE__ */ Symbol.for("react.suspense"), Se = /* @__PURE__ */ Symbol.for("react.suspense_list"), je = /* @__PURE__ */ Symbol.for("react.memo"), Re = /* @__PURE__ */ Symbol.for("react.lazy"), me = /* @__PURE__ */ Symbol.for("react.offscreen"), te = Symbol.iterator;
  function be(n) {
    return n === null || typeof n != "object" ? null : (n = te && n[te] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var fe = Object.assign, A;
  function G(n) {
    if (A === void 0) try {
      throw Error();
    } catch (u) {
      var r = u.stack.trim().match(/\n( *(at )?)/);
      A = r && r[1] || "";
    }
    return `
` + A + n;
  }
  var Ge = !1;
  function Ne(n, r) {
    if (!n || Ge) return "";
    Ge = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (I) {
          var o = I;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (I) {
          o = I;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (I) {
          o = I;
        }
        n();
      }
    } catch (I) {
      if (I && o && typeof I.stack == "string") {
        for (var c = I.stack.split(`
`), d = o.stack.split(`
`), _ = c.length - 1, R = d.length - 1; 1 <= _ && 0 <= R && c[_] !== d[R]; ) R--;
        for (; 1 <= _ && 0 <= R; _--, R--) if (c[_] !== d[R]) {
          if (_ !== 1 || R !== 1)
            do
              if (_--, R--, 0 > R || c[_] !== d[R]) {
                var D = `
` + c[_].replace(" at new ", " at ");
                return n.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", n.displayName)), D;
              }
            while (1 <= _ && 0 <= R);
          break;
        }
      }
    } finally {
      Ge = !1, Error.prepareStackTrace = u;
    }
    return (n = n ? n.displayName || n.name : "") ? G(n) : "";
  }
  function vt(n) {
    switch (n.tag) {
      case 5:
        return G(n.type);
      case 16:
        return G("Lazy");
      case 13:
        return G("Suspense");
      case 19:
        return G("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ne(n.type, !1), n;
      case 11:
        return n = Ne(n.type.render, !1), n;
      case 1:
        return n = Ne(n.type, !0), n;
      default:
        return "";
    }
  }
  function Xe(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Be:
        return "Fragment";
      case et:
        return "Portal";
      case at:
        return "Profiler";
      case $e:
        return "StrictMode";
      case ee:
        return "Suspense";
      case Se:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ct:
        return (n.displayName || "Context") + ".Consumer";
      case st:
        return (n._context.displayName || "Context") + ".Provider";
      case K:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case je:
        return r = n.displayName || null, r !== null ? r : Xe(n.type) || "Memo";
      case Re:
        r = n._payload, n = n._init;
        try {
          return Xe(n(r));
        } catch {
        }
    }
    return null;
  }
  function xe(n) {
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
        return Xe(r);
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
  function it(n) {
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
  function ft(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Wt(n) {
    var r = ft(n) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var c = u.get, d = u.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(_) {
        o = "" + _, d.call(this, _);
      } }), Object.defineProperty(n, r, { enumerable: u.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(_) {
        o = "" + _;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function On(n) {
    n._valueTracker || (n._valueTracker = Wt(n));
  }
  function br(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var u = r.getValue(), o = "";
    return n && (o = ft(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== u ? (r.setValue(n), !0) : !1;
  }
  function En(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function rr(n, r) {
    var u = r.checked;
    return fe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: u ?? n._wrapperState.initialChecked });
  }
  function Hn(n, r) {
    var u = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    u = it(r.value != null ? r.value : u), n._wrapperState = { initialChecked: o, initialValue: u, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && Ee(n, "checked", r, !1);
  }
  function Wr(n, r) {
    Bn(n, r);
    var u = it(r.value), o = r.type;
    if (u != null) o === "number" ? (u === 0 && n.value === "" || n.value != u) && (n.value = "" + u) : n.value !== "" + u && (n.value = "" + u);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? ca(n, r.type, u) : r.hasOwnProperty("defaultValue") && ca(n, r.type, it(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function fi(n, r, u) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, u || r === n.value || (n.value = r), n.defaultValue = r;
    }
    u = n.name, u !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, u !== "" && (n.name = u);
  }
  function ca(n, r, u) {
    (r !== "number" || En(n.ownerDocument) !== n) && (u == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + u && (n.defaultValue = "" + u));
  }
  var qn = Array.isArray;
  function Cn(n, r, u, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < u.length; c++) r["$" + u[c]] = !0;
      for (u = 0; u < n.length; u++) c = r.hasOwnProperty("$" + n[u].value), n[u].selected !== c && (n[u].selected = c), c && o && (n[u].defaultSelected = !0);
    } else {
      for (u = "" + it(u), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === u) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function In(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(m(91));
    return fe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Sr(n, r) {
    var u = r.value;
    if (u == null) {
      if (u = r.children, r = r.defaultValue, u != null) {
        if (r != null) throw Error(m(92));
        if (qn(u)) {
          if (1 < u.length) throw Error(m(93));
          u = u[0];
        }
        r = u;
      }
      r == null && (r = ""), u = r;
    }
    n._wrapperState = { initialValue: it(u) };
  }
  function Wa(n, r) {
    var u = it(r.value), o = it(r.defaultValue);
    u != null && (u = "" + u, u !== n.value && (n.value = u), r.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u)), o != null && (n.defaultValue = "" + o);
  }
  function Ln(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function _r(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function fa(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? _r(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Qa, di = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, u, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, u, o, c);
      });
    } : n;
  })(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Qa = Qa || document.createElement("div"), Qa.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Qa.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ye(n, r) {
    if (r) {
      var u = n.firstChild;
      if (u && u === n.lastChild && u.nodeType === 3) {
        u.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Ye = {
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
  }, Ct = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ye).forEach(function(n) {
    Ct.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Ye[r] = Ye[n];
    });
  });
  function It(n, r, u) {
    return r == null || typeof r == "boolean" || r === "" ? "" : u || typeof r != "number" || r === 0 || Ye.hasOwnProperty(n) && Ye[n] ? ("" + r).trim() : r + "px";
  }
  function nn(n, r) {
    n = n.style;
    for (var u in r) if (r.hasOwnProperty(u)) {
      var o = u.indexOf("--") === 0, c = It(u, r[u], o);
      u === "float" && (u = "cssFloat"), o ? n.setProperty(u, c) : n[u] = c;
    }
  }
  var vn = fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function on(n, r) {
    if (r) {
      if (vn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(m(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(m(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(m(62));
    }
  }
  function Xn(n, r) {
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
  var rn = null;
  function Qt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Gt = null, da = null, Er = null;
  function wa(n) {
    if (n = Ke(n)) {
      if (typeof Gt != "function") throw Error(m(280));
      var r = n.stateNode;
      r && (r = mn(r), Gt(n.stateNode, n.type, r));
    }
  }
  function Hi(n) {
    da ? Er ? Er.push(n) : Er = [n] : da = n;
  }
  function tl() {
    if (da) {
      var n = da, r = Er;
      if (Er = da = null, wa(n), r) for (n = 0; n < r.length; n++) wa(r[n]);
    }
  }
  function nl(n, r) {
    return n(r);
  }
  function hu() {
  }
  var mu = !1;
  function rl(n, r, u) {
    if (mu) return n(r, u);
    mu = !0;
    try {
      return nl(n, r, u);
    } finally {
      mu = !1, (da !== null || Er !== null) && (hu(), tl());
    }
  }
  function xr(n, r) {
    var u = n.stateNode;
    if (u === null) return null;
    var o = mn(u);
    if (o === null) return null;
    u = o[r];
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
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (u && typeof u != "function") throw Error(m(231, r, typeof u));
    return u;
  }
  var kr = !1;
  if (z) try {
    var ar = {};
    Object.defineProperty(ar, "passive", { get: function() {
      kr = !0;
    } }), window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar);
  } catch {
    kr = !1;
  }
  function pi(n, r, u, o, c, d, _, R, D) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(u, I);
    } catch (le) {
      this.onError(le);
    }
  }
  var Ga = !1, vi = null, hi = !1, x = null, re = { onError: function(n) {
    Ga = !0, vi = n;
  } };
  function Ce(n, r, u, o, c, d, _, R, D) {
    Ga = !1, vi = null, pi.apply(re, arguments);
  }
  function ze(n, r, u, o, c, d, _, R, D) {
    if (Ce.apply(this, arguments), Ga) {
      if (Ga) {
        var I = vi;
        Ga = !1, vi = null;
      } else throw Error(m(198));
      hi || (hi = !0, x = I);
    }
  }
  function gt(n) {
    var r = n, u = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (u = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? u : null;
  }
  function ht(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function bt(n) {
    if (gt(n) !== n) throw Error(m(188));
  }
  function Tt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = gt(n), r === null) throw Error(m(188));
      return r !== n ? null : n;
    }
    for (var u = n, o = r; ; ) {
      var c = u.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          u = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === u) return bt(c), n;
          if (d === o) return bt(c), r;
          d = d.sibling;
        }
        throw Error(m(188));
      }
      if (u.return !== o.return) u = c, o = d;
      else {
        for (var _ = !1, R = c.child; R; ) {
          if (R === u) {
            _ = !0, u = c, o = d;
            break;
          }
          if (R === o) {
            _ = !0, o = c, u = d;
            break;
          }
          R = R.sibling;
        }
        if (!_) {
          for (R = d.child; R; ) {
            if (R === u) {
              _ = !0, u = d, o = c;
              break;
            }
            if (R === o) {
              _ = !0, o = d, u = c;
              break;
            }
            R = R.sibling;
          }
          if (!_) throw Error(m(189));
        }
      }
      if (u.alternate !== o) throw Error(m(190));
    }
    if (u.tag !== 3) throw Error(m(188));
    return u.stateNode.current === u ? n : r;
  }
  function Rn(n) {
    return n = Tt(n), n !== null ? an(n) : null;
  }
  function an(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = an(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var sn = S.unstable_scheduleCallback, ir = S.unstable_cancelCallback, Ka = S.unstable_shouldYield, qa = S.unstable_requestPaint, St = S.unstable_now, Et = S.unstable_getCurrentPriorityLevel, Xa = S.unstable_ImmediatePriority, al = S.unstable_UserBlockingPriority, il = S.unstable_NormalPriority, yu = S.unstable_LowPriority, ql = S.unstable_IdlePriority, gu = null, Qr = null;
  function Go(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function") try {
      Qr.onCommitFiberRoot(gu, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Dr = Math.clz32 ? Math.clz32 : Xl, fc = Math.log, dc = Math.LN2;
  function Xl(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (fc(n) / dc | 0) | 0;
  }
  var Su = 64, pa = 4194304;
  function Za(n) {
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
  function Ja(n, r) {
    var u = n.pendingLanes;
    if (u === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, _ = u & 268435455;
    if (_ !== 0) {
      var R = _ & ~c;
      R !== 0 ? o = Za(R) : (d &= _, d !== 0 && (o = Za(d)));
    } else _ = u & ~c, _ !== 0 ? o = Za(_) : d !== 0 && (o = Za(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && (r & c) === 0 && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if ((o & 4) !== 0 && (o |= u & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) u = 31 - Dr(r), c = 1 << u, o |= n[u], r &= ~c;
    return o;
  }
  function Zl(n, r) {
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
  function ul(n, r) {
    for (var u = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var _ = 31 - Dr(d), R = 1 << _, D = c[_];
      D === -1 ? ((R & u) === 0 || (R & o) !== 0) && (c[_] = Zl(R, r)) : D <= r && (n.expiredLanes |= R), d &= ~R;
    }
  }
  function _u(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Jl() {
    var n = Su;
    return Su <<= 1, (Su & 4194240) === 0 && (Su = 64), n;
  }
  function eo(n) {
    for (var r = [], u = 0; 31 > u; u++) r.push(n);
    return r;
  }
  function Bi(n, r, u) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Dr(r), n[r] = u;
  }
  function ed(n, r) {
    var u = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < u; ) {
      var c = 31 - Dr(u), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, u &= ~d;
    }
  }
  function Ii(n, r) {
    var u = n.entangledLanes |= r;
    for (n = n.entanglements; u; ) {
      var o = 31 - Dr(u), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), u &= ~c;
    }
  }
  var jt = 0;
  function to(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var At, Ko, mi, pt, no, ur = !1, yi = [], Or = null, gi = null, cn = null, Kt = /* @__PURE__ */ new Map(), Eu = /* @__PURE__ */ new Map(), $n = [], Lr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ba(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Or = null;
        break;
      case "dragenter":
      case "dragleave":
        gi = null;
        break;
      case "mouseover":
      case "mouseout":
        cn = null;
        break;
      case "pointerover":
      case "pointerout":
        Kt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Eu.delete(r.pointerId);
    }
  }
  function ll(n, r, u, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: u, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Ke(r), r !== null && Ko(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function qo(n, r, u, o, c) {
    switch (r) {
      case "focusin":
        return Or = ll(Or, n, r, u, o, c), !0;
      case "dragenter":
        return gi = ll(gi, n, r, u, o, c), !0;
      case "mouseover":
        return cn = ll(cn, n, r, u, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Kt.set(d, ll(Kt.get(d) || null, n, r, u, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Eu.set(d, ll(Eu.get(d) || null, n, r, u, o, c)), !0;
    }
    return !1;
  }
  function Xo(n) {
    var r = ml(n.target);
    if (r !== null) {
      var u = gt(r);
      if (u !== null) {
        if (r = u.tag, r === 13) {
          if (r = ht(u), r !== null) {
            n.blockedOn = r, no(n.priority, function() {
              mi(u);
            });
            return;
          }
        } else if (r === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Cu(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var u = io(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (u === null) {
        u = n.nativeEvent;
        var o = new u.constructor(u.type, u);
        rn = o, u.target.dispatchEvent(o), rn = null;
      } else return r = Ke(u), r !== null && Ko(r), n.blockedOn = u, !1;
      r.shift();
    }
    return !0;
  }
  function ol(n, r, u) {
    Cu(n) && u.delete(r);
  }
  function td() {
    ur = !1, Or !== null && Cu(Or) && (Or = null), gi !== null && Cu(gi) && (gi = null), cn !== null && Cu(cn) && (cn = null), Kt.forEach(ol), Eu.forEach(ol);
  }
  function xa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ur || (ur = !0, S.unstable_scheduleCallback(S.unstable_NormalPriority, td)));
  }
  function ei(n) {
    function r(c) {
      return xa(c, n);
    }
    if (0 < yi.length) {
      xa(yi[0], n);
      for (var u = 1; u < yi.length; u++) {
        var o = yi[u];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Or !== null && xa(Or, n), gi !== null && xa(gi, n), cn !== null && xa(cn, n), Kt.forEach(r), Eu.forEach(r), u = 0; u < $n.length; u++) o = $n[u], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < $n.length && (u = $n[0], u.blockedOn === null); ) Xo(u), u.blockedOn === null && $n.shift();
  }
  var Si = De.ReactCurrentBatchConfig, ka = !0;
  function ro(n, r, u, o) {
    var c = jt, d = Si.transition;
    Si.transition = null;
    try {
      jt = 1, Ru(n, r, u, o);
    } finally {
      jt = c, Si.transition = d;
    }
  }
  function ao(n, r, u, o) {
    var c = jt, d = Si.transition;
    Si.transition = null;
    try {
      jt = 4, Ru(n, r, u, o);
    } finally {
      jt = c, Si.transition = d;
    }
  }
  function Ru(n, r, u, o) {
    if (ka) {
      var c = io(n, r, u, o);
      if (c === null) Tc(n, r, o, sl, u), ba(n, o);
      else if (qo(c, n, r, u, o)) o.stopPropagation();
      else if (ba(n, o), r & 4 && -1 < Lr.indexOf(n)) {
        for (; c !== null; ) {
          var d = Ke(c);
          if (d !== null && At(d), d = io(n, r, u, o), d === null && Tc(n, r, o, sl, u), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Tc(n, r, o, null, u);
    }
  }
  var sl = null;
  function io(n, r, u, o) {
    if (sl = null, n = Qt(o), n = ml(n), n !== null) if (r = gt(n), r === null) n = null;
    else if (u = r.tag, u === 13) {
      if (n = ht(r), n !== null) return n;
      n = null;
    } else if (u === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return sl = n, null;
  }
  function uo(n) {
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
          case Xa:
            return 1;
          case al:
            return 4;
          case il:
          case yu:
            return 16;
          case ql:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ti = null, g = null, b = null;
  function B() {
    if (b) return b;
    var n, r = g, u = r.length, o, c = "value" in ti ? ti.value : ti.textContent, d = c.length;
    for (n = 0; n < u && r[n] === c[n]; n++) ;
    var _ = u - n;
    for (o = 1; o <= _ && r[u - o] === c[d - o]; o++) ;
    return b = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Q(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function de() {
    return !0;
  }
  function Ze() {
    return !1;
  }
  function _e(n) {
    function r(u, o, c, d, _) {
      this._reactName = u, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = _, this.currentTarget = null;
      for (var R in n) n.hasOwnProperty(R) && (u = n[R], this[R] = u ? u(d) : d[R]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? de : Ze, this.isPropagationStopped = Ze, this;
    }
    return fe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = de);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = de);
    }, persist: function() {
    }, isPersistent: de }), r;
  }
  var nt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, xt = _e(nt), Ut = fe({}, nt, { view: 0, detail: 0 }), un = _e(Ut), qt, Rt, Xt, hn = fe({}, Ut, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ud, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Xt && (Xt && n.type === "mousemove" ? (qt = n.screenX - Xt.screenX, Rt = n.screenY - Xt.screenY) : Rt = qt = 0, Xt = n), qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Rt;
  } }), Tu = _e(hn), Zo = fe({}, hn, { dataTransfer: 0 }), $i = _e(Zo), Jo = fe({}, Ut, { relatedTarget: 0 }), cl = _e(Jo), nd = fe({}, nt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pc = _e(nd), rd = fe({}, nt, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), dv = _e(rd), ad = fe({}, nt, { data: 0 }), id = _e(ad), pv = {
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
  }, vv = {
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
  }, hy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Yi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = hy[n]) ? !!r[n] : !1;
  }
  function ud() {
    return Yi;
  }
  var ld = fe({}, Ut, { key: function(n) {
    if (n.key) {
      var r = pv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Q(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? vv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ud, charCode: function(n) {
    return n.type === "keypress" ? Q(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Q(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), od = _e(ld), sd = fe({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), hv = _e(sd), vc = fe({}, Ut, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ud }), mv = _e(vc), Gr = fe({}, nt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wi = _e(Gr), Mn = fe({}, hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qi = _e(Mn), cd = [9, 13, 27, 32], lo = z && "CompositionEvent" in window, es = null;
  z && "documentMode" in document && (es = document.documentMode);
  var ts = z && "TextEvent" in window && !es, yv = z && (!lo || es && 8 < es && 11 >= es), gv = " ", hc = !1;
  function Sv(n, r) {
    switch (n) {
      case "keyup":
        return cd.indexOf(r.keyCode) !== -1;
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
  function _v(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var oo = !1;
  function Ev(n, r) {
    switch (n) {
      case "compositionend":
        return _v(r);
      case "keypress":
        return r.which !== 32 ? null : (hc = !0, gv);
      case "textInput":
        return n = r.data, n === gv && hc ? null : n;
      default:
        return null;
    }
  }
  function my(n, r) {
    if (oo) return n === "compositionend" || !lo && Sv(n, r) ? (n = B(), b = g = ti = null, oo = !1, n) : null;
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
        return yv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var yy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Cv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!yy[n.type] : r === "textarea";
  }
  function fd(n, r, u, o) {
    Hi(o), r = ls(r, "onChange"), 0 < r.length && (u = new xt("onChange", "change", null, u, o), n.push({ event: u, listeners: r }));
  }
  var _i = null, fl = null;
  function Rv(n) {
    vl(n, 0);
  }
  function ns(n) {
    var r = ri(n);
    if (br(r)) return n;
  }
  function gy(n, r) {
    if (n === "change") return r;
  }
  var Tv = !1;
  if (z) {
    var dd;
    if (z) {
      var pd = "oninput" in document;
      if (!pd) {
        var wv = document.createElement("div");
        wv.setAttribute("oninput", "return;"), pd = typeof wv.oninput == "function";
      }
      dd = pd;
    } else dd = !1;
    Tv = dd && (!document.documentMode || 9 < document.documentMode);
  }
  function bv() {
    _i && (_i.detachEvent("onpropertychange", xv), fl = _i = null);
  }
  function xv(n) {
    if (n.propertyName === "value" && ns(fl)) {
      var r = [];
      fd(r, fl, n, Qt(n)), rl(Rv, r);
    }
  }
  function Sy(n, r, u) {
    n === "focusin" ? (bv(), _i = r, fl = u, _i.attachEvent("onpropertychange", xv)) : n === "focusout" && bv();
  }
  function kv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ns(fl);
  }
  function _y(n, r) {
    if (n === "click") return ns(r);
  }
  function Dv(n, r) {
    if (n === "input" || n === "change") return ns(r);
  }
  function Ey(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ni = typeof Object.is == "function" ? Object.is : Ey;
  function rs(n, r) {
    if (ni(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var u = Object.keys(n), o = Object.keys(r);
    if (u.length !== o.length) return !1;
    for (o = 0; o < u.length; o++) {
      var c = u[o];
      if (!O.call(r, c) || !ni(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Ov(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function mc(n, r) {
    var u = Ov(n);
    n = 0;
    for (var o; u; ) {
      if (u.nodeType === 3) {
        if (o = n + u.textContent.length, n <= r && o >= r) return { node: u, offset: r - n };
        n = o;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Ov(u);
    }
  }
  function wu(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? wu(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function as() {
    for (var n = window, r = En(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var u = typeof r.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) n = r.contentWindow;
      else break;
      r = En(n.document);
    }
    return r;
  }
  function yc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function so(n) {
    var r = as(), u = n.focusedElem, o = n.selectionRange;
    if (r !== u && u && u.ownerDocument && wu(u.ownerDocument.documentElement, u)) {
      if (o !== null && yc(u)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in u) u.selectionStart = r, u.selectionEnd = Math.min(n, u.value.length);
        else if (n = (r = u.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = u.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = mc(u, d);
          var _ = mc(
            u,
            o
          );
          c && _ && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== _.node || n.focusOffset !== _.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(_.node, _.offset)) : (r.setEnd(_.node, _.offset), n.addRange(r)));
        }
      }
      for (r = [], n = u; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof u.focus == "function" && u.focus(), u = 0; u < r.length; u++) n = r[u], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Cy = z && "documentMode" in document && 11 >= document.documentMode, co = null, vd = null, is = null, hd = !1;
  function md(n, r, u) {
    var o = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    hd || co == null || co !== En(o) || (o = co, "selectionStart" in o && yc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), is && rs(is, o) || (is = o, o = ls(vd, "onSelect"), 0 < o.length && (r = new xt("onSelect", "select", null, r, u), n.push({ event: r, listeners: o }), r.target = co)));
  }
  function gc(n, r) {
    var u = {};
    return u[n.toLowerCase()] = r.toLowerCase(), u["Webkit" + n] = "webkit" + r, u["Moz" + n] = "moz" + r, u;
  }
  var dl = { animationend: gc("Animation", "AnimationEnd"), animationiteration: gc("Animation", "AnimationIteration"), animationstart: gc("Animation", "AnimationStart"), transitionend: gc("Transition", "TransitionEnd") }, lr = {}, yd = {};
  z && (yd = document.createElement("div").style, "AnimationEvent" in window || (delete dl.animationend.animation, delete dl.animationiteration.animation, delete dl.animationstart.animation), "TransitionEvent" in window || delete dl.transitionend.transition);
  function Sc(n) {
    if (lr[n]) return lr[n];
    if (!dl[n]) return n;
    var r = dl[n], u;
    for (u in r) if (r.hasOwnProperty(u) && u in yd) return lr[n] = r[u];
    return n;
  }
  var Lv = Sc("animationend"), Mv = Sc("animationiteration"), Nv = Sc("animationstart"), Av = Sc("transitionend"), gd = /* @__PURE__ */ new Map(), _c = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Da(n, r) {
    gd.set(n, r), T(r, [n]);
  }
  for (var Sd = 0; Sd < _c.length; Sd++) {
    var pl = _c[Sd], Ry = pl.toLowerCase(), Ty = pl[0].toUpperCase() + pl.slice(1);
    Da(Ry, "on" + Ty);
  }
  Da(Lv, "onAnimationEnd"), Da(Mv, "onAnimationIteration"), Da(Nv, "onAnimationStart"), Da("dblclick", "onDoubleClick"), Da("focusin", "onFocus"), Da("focusout", "onBlur"), Da(Av, "onTransitionEnd"), v("onMouseEnter", ["mouseout", "mouseover"]), v("onMouseLeave", ["mouseout", "mouseover"]), v("onPointerEnter", ["pointerout", "pointerover"]), v("onPointerLeave", ["pointerout", "pointerover"]), T("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), T("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), T("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), T("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var us = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), _d = new Set("cancel close invalid load scroll toggle".split(" ").concat(us));
  function Ec(n, r, u) {
    var o = n.type || "unknown-event";
    n.currentTarget = u, ze(o, r, void 0, n), n.currentTarget = null;
  }
  function vl(n, r) {
    r = (r & 4) !== 0;
    for (var u = 0; u < n.length; u++) {
      var o = n[u], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var _ = o.length - 1; 0 <= _; _--) {
          var R = o[_], D = R.instance, I = R.currentTarget;
          if (R = R.listener, D !== d && c.isPropagationStopped()) break e;
          Ec(c, R, I), d = D;
        }
        else for (_ = 0; _ < o.length; _++) {
          if (R = o[_], D = R.instance, I = R.currentTarget, R = R.listener, D !== d && c.isPropagationStopped()) break e;
          Ec(c, R, I), d = D;
        }
      }
    }
    if (hi) throw n = x, hi = !1, x = null, n;
  }
  function $t(n, r) {
    var u = r[cs];
    u === void 0 && (u = r[cs] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    u.has(o) || (Uv(r, n, 2, !1), u.add(o));
  }
  function Cc(n, r, u) {
    var o = 0;
    r && (o |= 4), Uv(u, n, o, r);
  }
  var Rc = "_reactListening" + Math.random().toString(36).slice(2);
  function fo(n) {
    if (!n[Rc]) {
      n[Rc] = !0, w.forEach(function(u) {
        u !== "selectionchange" && (_d.has(u) || Cc(u, !1, n), Cc(u, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Rc] || (r[Rc] = !0, Cc("selectionchange", !1, r));
    }
  }
  function Uv(n, r, u, o) {
    switch (uo(r)) {
      case 1:
        var c = ro;
        break;
      case 4:
        c = ao;
        break;
      default:
        c = Ru;
    }
    u = c.bind(null, r, u, n), c = void 0, !kr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, u, { capture: !0, passive: c }) : n.addEventListener(r, u, !0) : c !== void 0 ? n.addEventListener(r, u, { passive: c }) : n.addEventListener(r, u, !1);
  }
  function Tc(n, r, u, o, c) {
    var d = o;
    if ((r & 1) === 0 && (r & 2) === 0 && o !== null) e: for (; ; ) {
      if (o === null) return;
      var _ = o.tag;
      if (_ === 3 || _ === 4) {
        var R = o.stateNode.containerInfo;
        if (R === c || R.nodeType === 8 && R.parentNode === c) break;
        if (_ === 4) for (_ = o.return; _ !== null; ) {
          var D = _.tag;
          if ((D === 3 || D === 4) && (D = _.stateNode.containerInfo, D === c || D.nodeType === 8 && D.parentNode === c)) return;
          _ = _.return;
        }
        for (; R !== null; ) {
          if (_ = ml(R), _ === null) return;
          if (D = _.tag, D === 5 || D === 6) {
            o = d = _;
            continue e;
          }
          R = R.parentNode;
        }
      }
      o = o.return;
    }
    rl(function() {
      var I = d, le = Qt(u), se = [];
      e: {
        var ue = gd.get(n);
        if (ue !== void 0) {
          var Oe = xt, Pe = n;
          switch (n) {
            case "keypress":
              if (Q(u) === 0) break e;
            case "keydown":
            case "keyup":
              Oe = od;
              break;
            case "focusin":
              Pe = "focus", Oe = cl;
              break;
            case "focusout":
              Pe = "blur", Oe = cl;
              break;
            case "beforeblur":
            case "afterblur":
              Oe = cl;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Oe = Tu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Oe = $i;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Oe = mv;
              break;
            case Lv:
            case Mv:
            case Nv:
              Oe = pc;
              break;
            case Av:
              Oe = Wi;
              break;
            case "scroll":
              Oe = un;
              break;
            case "wheel":
              Oe = Qi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Oe = dv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Oe = hv;
          }
          var Ie = (r & 4) !== 0, kn = !Ie && n === "scroll", j = Ie ? ue !== null ? ue + "Capture" : null : ue;
          Ie = [];
          for (var M = I, V; M !== null; ) {
            V = M;
            var oe = V.stateNode;
            if (V.tag === 5 && oe !== null && (V = oe, j !== null && (oe = xr(M, j), oe != null && Ie.push(po(M, oe, V)))), kn) break;
            M = M.return;
          }
          0 < Ie.length && (ue = new Oe(ue, Pe, null, u, le), se.push({ event: ue, listeners: Ie }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (ue = n === "mouseover" || n === "pointerover", Oe = n === "mouseout" || n === "pointerout", ue && u !== rn && (Pe = u.relatedTarget || u.fromElement) && (ml(Pe) || Pe[Gi])) break e;
          if ((Oe || ue) && (ue = le.window === le ? le : (ue = le.ownerDocument) ? ue.defaultView || ue.parentWindow : window, Oe ? (Pe = u.relatedTarget || u.toElement, Oe = I, Pe = Pe ? ml(Pe) : null, Pe !== null && (kn = gt(Pe), Pe !== kn || Pe.tag !== 5 && Pe.tag !== 6) && (Pe = null)) : (Oe = null, Pe = I), Oe !== Pe)) {
            if (Ie = Tu, oe = "onMouseLeave", j = "onMouseEnter", M = "mouse", (n === "pointerout" || n === "pointerover") && (Ie = hv, oe = "onPointerLeave", j = "onPointerEnter", M = "pointer"), kn = Oe == null ? ue : ri(Oe), V = Pe == null ? ue : ri(Pe), ue = new Ie(oe, M + "leave", Oe, u, le), ue.target = kn, ue.relatedTarget = V, oe = null, ml(le) === I && (Ie = new Ie(j, M + "enter", Pe, u, le), Ie.target = V, Ie.relatedTarget = kn, oe = Ie), kn = oe, Oe && Pe) t: {
              for (Ie = Oe, j = Pe, M = 0, V = Ie; V; V = bu(V)) M++;
              for (V = 0, oe = j; oe; oe = bu(oe)) V++;
              for (; 0 < M - V; ) Ie = bu(Ie), M--;
              for (; 0 < V - M; ) j = bu(j), V--;
              for (; M--; ) {
                if (Ie === j || j !== null && Ie === j.alternate) break t;
                Ie = bu(Ie), j = bu(j);
              }
              Ie = null;
            }
            else Ie = null;
            Oe !== null && zv(se, ue, Oe, Ie, !1), Pe !== null && kn !== null && zv(se, kn, Pe, Ie, !0);
          }
        }
        e: {
          if (ue = I ? ri(I) : window, Oe = ue.nodeName && ue.nodeName.toLowerCase(), Oe === "select" || Oe === "input" && ue.type === "file") var Ve = gy;
          else if (Cv(ue)) if (Tv) Ve = Dv;
          else {
            Ve = kv;
            var tt = Sy;
          }
          else (Oe = ue.nodeName) && Oe.toLowerCase() === "input" && (ue.type === "checkbox" || ue.type === "radio") && (Ve = _y);
          if (Ve && (Ve = Ve(n, I))) {
            fd(se, Ve, u, le);
            break e;
          }
          tt && tt(n, ue, I), n === "focusout" && (tt = ue._wrapperState) && tt.controlled && ue.type === "number" && ca(ue, "number", ue.value);
        }
        switch (tt = I ? ri(I) : window, n) {
          case "focusin":
            (Cv(tt) || tt.contentEditable === "true") && (co = tt, vd = I, is = null);
            break;
          case "focusout":
            is = vd = co = null;
            break;
          case "mousedown":
            hd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            hd = !1, md(se, u, le);
            break;
          case "selectionchange":
            if (Cy) break;
          case "keydown":
          case "keyup":
            md(se, u, le);
        }
        var rt;
        if (lo) e: {
          switch (n) {
            case "compositionstart":
              var dt = "onCompositionStart";
              break e;
            case "compositionend":
              dt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              dt = "onCompositionUpdate";
              break e;
          }
          dt = void 0;
        }
        else oo ? Sv(n, u) && (dt = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (dt = "onCompositionStart");
        dt && (yv && u.locale !== "ko" && (oo || dt !== "onCompositionStart" ? dt === "onCompositionEnd" && oo && (rt = B()) : (ti = le, g = "value" in ti ? ti.value : ti.textContent, oo = !0)), tt = ls(I, dt), 0 < tt.length && (dt = new id(dt, n, null, u, le), se.push({ event: dt, listeners: tt }), rt ? dt.data = rt : (rt = _v(u), rt !== null && (dt.data = rt)))), (rt = ts ? Ev(n, u) : my(n, u)) && (I = ls(I, "onBeforeInput"), 0 < I.length && (le = new id("onBeforeInput", "beforeinput", null, u, le), se.push({ event: le, listeners: I }), le.data = rt));
      }
      vl(se, r);
    });
  }
  function po(n, r, u) {
    return { instance: n, listener: r, currentTarget: u };
  }
  function ls(n, r) {
    for (var u = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = xr(n, u), d != null && o.unshift(po(n, d, c)), d = xr(n, r), d != null && o.push(po(n, d, c))), n = n.return;
    }
    return o;
  }
  function bu(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function zv(n, r, u, o, c) {
    for (var d = r._reactName, _ = []; u !== null && u !== o; ) {
      var R = u, D = R.alternate, I = R.stateNode;
      if (D !== null && D === o) break;
      R.tag === 5 && I !== null && (R = I, c ? (D = xr(u, d), D != null && _.unshift(po(u, D, R))) : c || (D = xr(u, d), D != null && _.push(po(u, D, R)))), u = u.return;
    }
    _.length !== 0 && n.push({ event: r, listeners: _ });
  }
  var jv = /\r\n?/g, wy = /\u0000|\uFFFD/g;
  function Fv(n) {
    return (typeof n == "string" ? n : "" + n).replace(jv, `
`).replace(wy, "");
  }
  function wc(n, r, u) {
    if (r = Fv(r), Fv(n) !== r && u) throw Error(m(425));
  }
  function xu() {
  }
  var os = null, hl = null;
  function bc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var xc = typeof setTimeout == "function" ? setTimeout : void 0, Ed = typeof clearTimeout == "function" ? clearTimeout : void 0, Pv = typeof Promise == "function" ? Promise : void 0, vo = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pv < "u" ? function(n) {
    return Pv.resolve(null).then(n).catch(kc);
  } : xc;
  function kc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function ho(n, r) {
    var u = r, o = 0;
    do {
      var c = u.nextSibling;
      if (n.removeChild(u), c && c.nodeType === 8) if (u = c.data, u === "/$") {
        if (o === 0) {
          n.removeChild(c), ei(r);
          return;
        }
        o--;
      } else u !== "$" && u !== "$?" && u !== "$!" || o++;
      u = c;
    } while (u);
    ei(r);
  }
  function Ei(n) {
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
  function Vv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var u = n.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (r === 0) return n;
          r--;
        } else u === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var ku = Math.random().toString(36).slice(2), Ci = "__reactFiber$" + ku, ss = "__reactProps$" + ku, Gi = "__reactContainer$" + ku, cs = "__reactEvents$" + ku, mo = "__reactListeners$" + ku, by = "__reactHandles$" + ku;
  function ml(n) {
    var r = n[Ci];
    if (r) return r;
    for (var u = n.parentNode; u; ) {
      if (r = u[Gi] || u[Ci]) {
        if (u = r.alternate, r.child !== null || u !== null && u.child !== null) for (n = Vv(n); n !== null; ) {
          if (u = n[Ci]) return u;
          n = Vv(n);
        }
        return r;
      }
      n = u, u = n.parentNode;
    }
    return null;
  }
  function Ke(n) {
    return n = n[Ci] || n[Gi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ri(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(m(33));
  }
  function mn(n) {
    return n[ss] || null;
  }
  var Ot = [], Oa = -1;
  function La(n) {
    return { current: n };
  }
  function ln(n) {
    0 > Oa || (n.current = Ot[Oa], Ot[Oa] = null, Oa--);
  }
  function Qe(n, r) {
    Oa++, Ot[Oa] = n.current, n.current = r;
  }
  var Cr = {}, _n = La(Cr), Yn = La(!1), Kr = Cr;
  function qr(n, r) {
    var u = n.type.contextTypes;
    if (!u) return Cr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in u) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Nn(n) {
    return n = n.childContextTypes, n != null;
  }
  function yo() {
    ln(Yn), ln(_n);
  }
  function Hv(n, r, u) {
    if (_n.current !== Cr) throw Error(m(168));
    Qe(_n, r), Qe(Yn, u);
  }
  function fs(n, r, u) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return u;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(m(108, xe(n) || "Unknown", c));
    return fe({}, u, o);
  }
  function Zn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Cr, Kr = _n.current, Qe(_n, n), Qe(Yn, Yn.current), !0;
  }
  function Dc(n, r, u) {
    var o = n.stateNode;
    if (!o) throw Error(m(169));
    u ? (n = fs(n, r, Kr), o.__reactInternalMemoizedMergedChildContext = n, ln(Yn), ln(_n), Qe(_n, n)) : ln(Yn), Qe(Yn, u);
  }
  var Ri = null, go = !1, Ki = !1;
  function Oc(n) {
    Ri === null ? Ri = [n] : Ri.push(n);
  }
  function Du(n) {
    go = !0, Oc(n);
  }
  function Ti() {
    if (!Ki && Ri !== null) {
      Ki = !0;
      var n = 0, r = jt;
      try {
        var u = Ri;
        for (jt = 1; n < u.length; n++) {
          var o = u[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ri = null, go = !1;
      } catch (c) {
        throw Ri !== null && (Ri = Ri.slice(n + 1)), sn(Xa, Ti), c;
      } finally {
        jt = r, Ki = !1;
      }
    }
    return null;
  }
  var Ou = [], Lu = 0, Mu = null, qi = 0, An = [], Ma = 0, va = null, wi = 1, bi = "";
  function yl(n, r) {
    Ou[Lu++] = qi, Ou[Lu++] = Mu, Mu = n, qi = r;
  }
  function Bv(n, r, u) {
    An[Ma++] = wi, An[Ma++] = bi, An[Ma++] = va, va = n;
    var o = wi;
    n = bi;
    var c = 32 - Dr(o) - 1;
    o &= ~(1 << c), u += 1;
    var d = 32 - Dr(r) + c;
    if (30 < d) {
      var _ = c - c % 5;
      d = (o & (1 << _) - 1).toString(32), o >>= _, c -= _, wi = 1 << 32 - Dr(r) + c | u << c | o, bi = d + n;
    } else wi = 1 << d | u << c | o, bi = n;
  }
  function Lc(n) {
    n.return !== null && (yl(n, 1), Bv(n, 1, 0));
  }
  function Mc(n) {
    for (; n === Mu; ) Mu = Ou[--Lu], Ou[Lu] = null, qi = Ou[--Lu], Ou[Lu] = null;
    for (; n === va; ) va = An[--Ma], An[Ma] = null, bi = An[--Ma], An[Ma] = null, wi = An[--Ma], An[Ma] = null;
  }
  var Xr = null, Zr = null, dn = !1, Na = null;
  function Cd(n, r) {
    var u = Fa(5, null, null, 0);
    u.elementType = "DELETED", u.stateNode = r, u.return = n, r = n.deletions, r === null ? (n.deletions = [u], n.flags |= 16) : r.push(u);
  }
  function Iv(n, r) {
    switch (n.tag) {
      case 5:
        var u = n.type;
        return r = r.nodeType !== 1 || u.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Xr = n, Zr = Ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Xr = n, Zr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (u = va !== null ? { id: wi, overflow: bi } : null, n.memoizedState = { dehydrated: r, treeContext: u, retryLane: 1073741824 }, u = Fa(18, null, null, 0), u.stateNode = r, u.return = n, n.child = u, Xr = n, Zr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Rd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Td(n) {
    if (dn) {
      var r = Zr;
      if (r) {
        var u = r;
        if (!Iv(n, r)) {
          if (Rd(n)) throw Error(m(418));
          r = Ei(u.nextSibling);
          var o = Xr;
          r && Iv(n, r) ? Cd(o, u) : (n.flags = n.flags & -4097 | 2, dn = !1, Xr = n);
        }
      } else {
        if (Rd(n)) throw Error(m(418));
        n.flags = n.flags & -4097 | 2, dn = !1, Xr = n;
      }
    }
  }
  function Wn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Xr = n;
  }
  function Nc(n) {
    if (n !== Xr) return !1;
    if (!dn) return Wn(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !bc(n.type, n.memoizedProps)), r && (r = Zr)) {
      if (Rd(n)) throw ds(), Error(m(418));
      for (; r; ) Cd(n, r), r = Ei(r.nextSibling);
    }
    if (Wn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(m(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var u = n.data;
            if (u === "/$") {
              if (r === 0) {
                Zr = Ei(n.nextSibling);
                break e;
              }
              r--;
            } else u !== "$" && u !== "$!" && u !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Zr = null;
      }
    } else Zr = Xr ? Ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ds() {
    for (var n = Zr; n; ) n = Ei(n.nextSibling);
  }
  function Nu() {
    Zr = Xr = null, dn = !1;
  }
  function Xi(n) {
    Na === null ? Na = [n] : Na.push(n);
  }
  var xy = De.ReactCurrentBatchConfig;
  function gl(n, r, u) {
    if (n = u.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1) throw Error(m(309));
          var o = u.stateNode;
        }
        if (!o) throw Error(m(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(_) {
          var R = c.refs;
          _ === null ? delete R[d] : R[d] = _;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(m(284));
      if (!u._owner) throw Error(m(290, n));
    }
    return n;
  }
  function Ac(n, r) {
    throw n = Object.prototype.toString.call(r), Error(m(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function $v(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Sl(n) {
    function r(j, M) {
      if (n) {
        var V = j.deletions;
        V === null ? (j.deletions = [M], j.flags |= 16) : V.push(M);
      }
    }
    function u(j, M) {
      if (!n) return null;
      for (; M !== null; ) r(j, M), M = M.sibling;
      return null;
    }
    function o(j, M) {
      for (j = /* @__PURE__ */ new Map(); M !== null; ) M.key !== null ? j.set(M.key, M) : j.set(M.index, M), M = M.sibling;
      return j;
    }
    function c(j, M) {
      return j = Hu(j, M), j.index = 0, j.sibling = null, j;
    }
    function d(j, M, V) {
      return j.index = V, n ? (V = j.alternate, V !== null ? (V = V.index, V < M ? (j.flags |= 2, M) : V) : (j.flags |= 2, M)) : (j.flags |= 1048576, M);
    }
    function _(j) {
      return n && j.alternate === null && (j.flags |= 2), j;
    }
    function R(j, M, V, oe) {
      return M === null || M.tag !== 6 ? (M = tp(V, j.mode, oe), M.return = j, M) : (M = c(M, V), M.return = j, M);
    }
    function D(j, M, V, oe) {
      var Ve = V.type;
      return Ve === Be ? le(j, M, V.props.children, oe, V.key) : M !== null && (M.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === Re && $v(Ve) === M.type) ? (oe = c(M, V.props), oe.ref = gl(j, M, V), oe.return = j, oe) : (oe = Bs(V.type, V.key, V.props, null, j.mode, oe), oe.ref = gl(j, M, V), oe.return = j, oe);
    }
    function I(j, M, V, oe) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== V.containerInfo || M.stateNode.implementation !== V.implementation ? (M = vf(V, j.mode, oe), M.return = j, M) : (M = c(M, V.children || []), M.return = j, M);
    }
    function le(j, M, V, oe, Ve) {
      return M === null || M.tag !== 7 ? (M = ru(V, j.mode, oe, Ve), M.return = j, M) : (M = c(M, V), M.return = j, M);
    }
    function se(j, M, V) {
      if (typeof M == "string" && M !== "" || typeof M == "number") return M = tp("" + M, j.mode, V), M.return = j, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case pe:
            return V = Bs(M.type, M.key, M.props, null, j.mode, V), V.ref = gl(j, null, M), V.return = j, V;
          case et:
            return M = vf(M, j.mode, V), M.return = j, M;
          case Re:
            var oe = M._init;
            return se(j, oe(M._payload), V);
        }
        if (qn(M) || be(M)) return M = ru(M, j.mode, V, null), M.return = j, M;
        Ac(j, M);
      }
      return null;
    }
    function ue(j, M, V, oe) {
      var Ve = M !== null ? M.key : null;
      if (typeof V == "string" && V !== "" || typeof V == "number") return Ve !== null ? null : R(j, M, "" + V, oe);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case pe:
            return V.key === Ve ? D(j, M, V, oe) : null;
          case et:
            return V.key === Ve ? I(j, M, V, oe) : null;
          case Re:
            return Ve = V._init, ue(
              j,
              M,
              Ve(V._payload),
              oe
            );
        }
        if (qn(V) || be(V)) return Ve !== null ? null : le(j, M, V, oe, null);
        Ac(j, V);
      }
      return null;
    }
    function Oe(j, M, V, oe, Ve) {
      if (typeof oe == "string" && oe !== "" || typeof oe == "number") return j = j.get(V) || null, R(M, j, "" + oe, Ve);
      if (typeof oe == "object" && oe !== null) {
        switch (oe.$$typeof) {
          case pe:
            return j = j.get(oe.key === null ? V : oe.key) || null, D(M, j, oe, Ve);
          case et:
            return j = j.get(oe.key === null ? V : oe.key) || null, I(M, j, oe, Ve);
          case Re:
            var tt = oe._init;
            return Oe(j, M, V, tt(oe._payload), Ve);
        }
        if (qn(oe) || be(oe)) return j = j.get(V) || null, le(M, j, oe, Ve, null);
        Ac(M, oe);
      }
      return null;
    }
    function Pe(j, M, V, oe) {
      for (var Ve = null, tt = null, rt = M, dt = M = 0, tr = null; rt !== null && dt < V.length; dt++) {
        rt.index > dt ? (tr = rt, rt = null) : tr = rt.sibling;
        var Vt = ue(j, rt, V[dt], oe);
        if (Vt === null) {
          rt === null && (rt = tr);
          break;
        }
        n && rt && Vt.alternate === null && r(j, rt), M = d(Vt, M, dt), tt === null ? Ve = Vt : tt.sibling = Vt, tt = Vt, rt = tr;
      }
      if (dt === V.length) return u(j, rt), dn && yl(j, dt), Ve;
      if (rt === null) {
        for (; dt < V.length; dt++) rt = se(j, V[dt], oe), rt !== null && (M = d(rt, M, dt), tt === null ? Ve = rt : tt.sibling = rt, tt = rt);
        return dn && yl(j, dt), Ve;
      }
      for (rt = o(j, rt); dt < V.length; dt++) tr = Oe(rt, j, dt, V[dt], oe), tr !== null && (n && tr.alternate !== null && rt.delete(tr.key === null ? dt : tr.key), M = d(tr, M, dt), tt === null ? Ve = tr : tt.sibling = tr, tt = tr);
      return n && rt.forEach(function($u) {
        return r(j, $u);
      }), dn && yl(j, dt), Ve;
    }
    function Ie(j, M, V, oe) {
      var Ve = be(V);
      if (typeof Ve != "function") throw Error(m(150));
      if (V = Ve.call(V), V == null) throw Error(m(151));
      for (var tt = Ve = null, rt = M, dt = M = 0, tr = null, Vt = V.next(); rt !== null && !Vt.done; dt++, Vt = V.next()) {
        rt.index > dt ? (tr = rt, rt = null) : tr = rt.sibling;
        var $u = ue(j, rt, Vt.value, oe);
        if ($u === null) {
          rt === null && (rt = tr);
          break;
        }
        n && rt && $u.alternate === null && r(j, rt), M = d($u, M, dt), tt === null ? Ve = $u : tt.sibling = $u, tt = $u, rt = tr;
      }
      if (Vt.done) return u(
        j,
        rt
      ), dn && yl(j, dt), Ve;
      if (rt === null) {
        for (; !Vt.done; dt++, Vt = V.next()) Vt = se(j, Vt.value, oe), Vt !== null && (M = d(Vt, M, dt), tt === null ? Ve = Vt : tt.sibling = Vt, tt = Vt);
        return dn && yl(j, dt), Ve;
      }
      for (rt = o(j, rt); !Vt.done; dt++, Vt = V.next()) Vt = Oe(rt, j, dt, Vt.value, oe), Vt !== null && (n && Vt.alternate !== null && rt.delete(Vt.key === null ? dt : Vt.key), M = d(Vt, M, dt), tt === null ? Ve = Vt : tt.sibling = Vt, tt = Vt);
      return n && rt.forEach(function(bh) {
        return r(j, bh);
      }), dn && yl(j, dt), Ve;
    }
    function kn(j, M, V, oe) {
      if (typeof V == "object" && V !== null && V.type === Be && V.key === null && (V = V.props.children), typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case pe:
            e: {
              for (var Ve = V.key, tt = M; tt !== null; ) {
                if (tt.key === Ve) {
                  if (Ve = V.type, Ve === Be) {
                    if (tt.tag === 7) {
                      u(j, tt.sibling), M = c(tt, V.props.children), M.return = j, j = M;
                      break e;
                    }
                  } else if (tt.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === Re && $v(Ve) === tt.type) {
                    u(j, tt.sibling), M = c(tt, V.props), M.ref = gl(j, tt, V), M.return = j, j = M;
                    break e;
                  }
                  u(j, tt);
                  break;
                } else r(j, tt);
                tt = tt.sibling;
              }
              V.type === Be ? (M = ru(V.props.children, j.mode, oe, V.key), M.return = j, j = M) : (oe = Bs(V.type, V.key, V.props, null, j.mode, oe), oe.ref = gl(j, M, V), oe.return = j, j = oe);
            }
            return _(j);
          case et:
            e: {
              for (tt = V.key; M !== null; ) {
                if (M.key === tt) if (M.tag === 4 && M.stateNode.containerInfo === V.containerInfo && M.stateNode.implementation === V.implementation) {
                  u(j, M.sibling), M = c(M, V.children || []), M.return = j, j = M;
                  break e;
                } else {
                  u(j, M);
                  break;
                }
                else r(j, M);
                M = M.sibling;
              }
              M = vf(V, j.mode, oe), M.return = j, j = M;
            }
            return _(j);
          case Re:
            return tt = V._init, kn(j, M, tt(V._payload), oe);
        }
        if (qn(V)) return Pe(j, M, V, oe);
        if (be(V)) return Ie(j, M, V, oe);
        Ac(j, V);
      }
      return typeof V == "string" && V !== "" || typeof V == "number" ? (V = "" + V, M !== null && M.tag === 6 ? (u(j, M.sibling), M = c(M, V), M.return = j, j = M) : (u(j, M), M = tp(V, j.mode, oe), M.return = j, j = M), _(j)) : u(j, M);
    }
    return kn;
  }
  var Tn = Sl(!0), Te = Sl(!1), ha = La(null), Jr = null, So = null, wd = null;
  function bd() {
    wd = So = Jr = null;
  }
  function xd(n) {
    var r = ha.current;
    ln(ha), n._currentValue = r;
  }
  function kd(n, r, u) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === u) break;
      n = n.return;
    }
  }
  function yn(n, r) {
    Jr = n, wd = So = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (zn = !0), n.firstContext = null);
  }
  function Aa(n) {
    var r = n._currentValue;
    if (wd !== n) if (n = { context: n, memoizedValue: r, next: null }, So === null) {
      if (Jr === null) throw Error(m(308));
      So = n, Jr.dependencies = { lanes: 0, firstContext: n };
    } else So = So.next = n;
    return r;
  }
  var _l = null;
  function Dd(n) {
    _l === null ? _l = [n] : _l.push(n);
  }
  function Od(n, r, u, o) {
    var c = r.interleaved;
    return c === null ? (u.next = u, Dd(r)) : (u.next = c.next, c.next = u), r.interleaved = u, ma(n, o);
  }
  function ma(n, r) {
    n.lanes |= r;
    var u = n.alternate;
    for (u !== null && (u.lanes |= r), u = n, n = n.return; n !== null; ) n.childLanes |= r, u = n.alternate, u !== null && (u.childLanes |= r), u = n, n = n.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var ya = !1;
  function Ld(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Yv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Zi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Au(n, r, u) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Lt & 2) !== 0) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, ma(n, u);
    }
    return c = o.interleaved, c === null ? (r.next = r, Dd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, ma(n, u);
  }
  function Uc(n, r, u) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (u & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, u |= o, r.lanes = u, Ii(n, u);
    }
  }
  function Wv(n, r) {
    var u = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, u === o)) {
      var c = null, d = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var _ = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          d === null ? c = d = _ : d = d.next = _, u = u.next;
        } while (u !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      u = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = u;
      return;
    }
    n = u.lastBaseUpdate, n === null ? u.firstBaseUpdate = r : n.next = r, u.lastBaseUpdate = r;
  }
  function ps(n, r, u, o) {
    var c = n.updateQueue;
    ya = !1;
    var d = c.firstBaseUpdate, _ = c.lastBaseUpdate, R = c.shared.pending;
    if (R !== null) {
      c.shared.pending = null;
      var D = R, I = D.next;
      D.next = null, _ === null ? d = I : _.next = I, _ = D;
      var le = n.alternate;
      le !== null && (le = le.updateQueue, R = le.lastBaseUpdate, R !== _ && (R === null ? le.firstBaseUpdate = I : R.next = I, le.lastBaseUpdate = D));
    }
    if (d !== null) {
      var se = c.baseState;
      _ = 0, le = I = D = null, R = d;
      do {
        var ue = R.lane, Oe = R.eventTime;
        if ((o & ue) === ue) {
          le !== null && (le = le.next = {
            eventTime: Oe,
            lane: 0,
            tag: R.tag,
            payload: R.payload,
            callback: R.callback,
            next: null
          });
          e: {
            var Pe = n, Ie = R;
            switch (ue = r, Oe = u, Ie.tag) {
              case 1:
                if (Pe = Ie.payload, typeof Pe == "function") {
                  se = Pe.call(Oe, se, ue);
                  break e;
                }
                se = Pe;
                break e;
              case 3:
                Pe.flags = Pe.flags & -65537 | 128;
              case 0:
                if (Pe = Ie.payload, ue = typeof Pe == "function" ? Pe.call(Oe, se, ue) : Pe, ue == null) break e;
                se = fe({}, se, ue);
                break e;
              case 2:
                ya = !0;
            }
          }
          R.callback !== null && R.lane !== 0 && (n.flags |= 64, ue = c.effects, ue === null ? c.effects = [R] : ue.push(R));
        } else Oe = { eventTime: Oe, lane: ue, tag: R.tag, payload: R.payload, callback: R.callback, next: null }, le === null ? (I = le = Oe, D = se) : le = le.next = Oe, _ |= ue;
        if (R = R.next, R === null) {
          if (R = c.shared.pending, R === null) break;
          ue = R, R = ue.next, ue.next = null, c.lastBaseUpdate = ue, c.shared.pending = null;
        }
      } while (!0);
      if (le === null && (D = se), c.baseState = D, c.firstBaseUpdate = I, c.lastBaseUpdate = le, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          _ |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Li |= _, n.lanes = _, n.memoizedState = se;
    }
  }
  function Md(n, r, u) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = u, typeof c != "function") throw Error(m(191, c));
        c.call(o);
      }
    }
  }
  var vs = {}, xi = La(vs), hs = La(vs), ms = La(vs);
  function El(n) {
    if (n === vs) throw Error(m(174));
    return n;
  }
  function Nd(n, r) {
    switch (Qe(ms, r), Qe(hs, n), Qe(xi, vs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : fa(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = fa(r, n);
    }
    ln(xi), Qe(xi, r);
  }
  function Cl() {
    ln(xi), ln(hs), ln(ms);
  }
  function Qv(n) {
    El(ms.current);
    var r = El(xi.current), u = fa(r, n.type);
    r !== u && (Qe(hs, n), Qe(xi, u));
  }
  function zc(n) {
    hs.current === n && (ln(xi), ln(hs));
  }
  var gn = La(0);
  function jc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var u = r.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || u.data === "$!")) return r;
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
  var ys = [];
  function qe() {
    for (var n = 0; n < ys.length; n++) ys[n]._workInProgressVersionPrimary = null;
    ys.length = 0;
  }
  var wt = De.ReactCurrentDispatcher, Ft = De.ReactCurrentBatchConfig, Zt = 0, Pt = null, Un = null, Jn = null, Fc = !1, gs = !1, Rl = 0, ae = 0;
  function zt() {
    throw Error(m(321));
  }
  function ut(n, r) {
    if (r === null) return !1;
    for (var u = 0; u < r.length && u < n.length; u++) if (!ni(n[u], r[u])) return !1;
    return !0;
  }
  function Uu(n, r, u, o, c, d) {
    if (Zt = d, Pt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, wt.current = n === null || n.memoizedState === null ? Jc : Ts, n = u(o, c), gs) {
      d = 0;
      do {
        if (gs = !1, Rl = 0, 25 <= d) throw Error(m(301));
        d += 1, Jn = Un = null, r.updateQueue = null, wt.current = ef, n = u(o, c);
      } while (gs);
    }
    if (wt.current = kl, r = Un !== null && Un.next !== null, Zt = 0, Jn = Un = Pt = null, Fc = !1, r) throw Error(m(300));
    return n;
  }
  function ai() {
    var n = Rl !== 0;
    return Rl = 0, n;
  }
  function Rr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Jn === null ? Pt.memoizedState = Jn = n : Jn = Jn.next = n, Jn;
  }
  function wn() {
    if (Un === null) {
      var n = Pt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Un.next;
    var r = Jn === null ? Pt.memoizedState : Jn.next;
    if (r !== null) Jn = r, Un = n;
    else {
      if (n === null) throw Error(m(310));
      Un = n, n = { memoizedState: Un.memoizedState, baseState: Un.baseState, baseQueue: Un.baseQueue, queue: Un.queue, next: null }, Jn === null ? Pt.memoizedState = Jn = n : Jn = Jn.next = n;
    }
    return Jn;
  }
  function Ji(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function zu(n) {
    var r = wn(), u = r.queue;
    if (u === null) throw Error(m(311));
    u.lastRenderedReducer = n;
    var o = Un, c = o.baseQueue, d = u.pending;
    if (d !== null) {
      if (c !== null) {
        var _ = c.next;
        c.next = d.next, d.next = _;
      }
      o.baseQueue = c = d, u.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var R = _ = null, D = null, I = d;
      do {
        var le = I.lane;
        if ((Zt & le) === le) D !== null && (D = D.next = { lane: 0, action: I.action, hasEagerState: I.hasEagerState, eagerState: I.eagerState, next: null }), o = I.hasEagerState ? I.eagerState : n(o, I.action);
        else {
          var se = {
            lane: le,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          };
          D === null ? (R = D = se, _ = o) : D = D.next = se, Pt.lanes |= le, Li |= le;
        }
        I = I.next;
      } while (I !== null && I !== d);
      D === null ? _ = o : D.next = R, ni(o, r.memoizedState) || (zn = !0), r.memoizedState = o, r.baseState = _, r.baseQueue = D, u.lastRenderedState = o;
    }
    if (n = u.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Pt.lanes |= d, Li |= d, c = c.next;
      while (c !== n);
    } else c === null && (u.lanes = 0);
    return [r.memoizedState, u.dispatch];
  }
  function Tl(n) {
    var r = wn(), u = r.queue;
    if (u === null) throw Error(m(311));
    u.lastRenderedReducer = n;
    var o = u.dispatch, c = u.pending, d = r.memoizedState;
    if (c !== null) {
      u.pending = null;
      var _ = c = c.next;
      do
        d = n(d, _.action), _ = _.next;
      while (_ !== c);
      ni(d, r.memoizedState) || (zn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), u.lastRenderedState = d;
    }
    return [d, o];
  }
  function Pc() {
  }
  function Vc(n, r) {
    var u = Pt, o = wn(), c = r(), d = !ni(o.memoizedState, c);
    if (d && (o.memoizedState = c, zn = !0), o = o.queue, Ss(Ic.bind(null, u, o, n), [n]), o.getSnapshot !== r || d || Jn !== null && Jn.memoizedState.tag & 1) {
      if (u.flags |= 2048, wl(9, Bc.bind(null, u, o, c, r), void 0, null), Qn === null) throw Error(m(349));
      (Zt & 30) !== 0 || Hc(u, r, c);
    }
    return c;
  }
  function Hc(n, r, u) {
    n.flags |= 16384, n = { getSnapshot: r, value: u }, r = Pt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Pt.updateQueue = r, r.stores = [n]) : (u = r.stores, u === null ? r.stores = [n] : u.push(n));
  }
  function Bc(n, r, u, o) {
    r.value = u, r.getSnapshot = o, $c(r) && Yc(n);
  }
  function Ic(n, r, u) {
    return u(function() {
      $c(r) && Yc(n);
    });
  }
  function $c(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var u = r();
      return !ni(n, u);
    } catch {
      return !0;
    }
  }
  function Yc(n) {
    var r = ma(n, 1);
    r !== null && Ur(r, n, 1, -1);
  }
  function Wc(n) {
    var r = Rr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ji, lastRenderedState: n }, r.queue = n, n = n.dispatch = xl.bind(null, Pt, n), [r.memoizedState, n];
  }
  function wl(n, r, u, o) {
    return n = { tag: n, create: r, destroy: u, deps: o, next: null }, r = Pt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Pt.updateQueue = r, r.lastEffect = n.next = n) : (u = r.lastEffect, u === null ? r.lastEffect = n.next = n : (o = u.next, u.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Qc() {
    return wn().memoizedState;
  }
  function _o(n, r, u, o) {
    var c = Rr();
    Pt.flags |= n, c.memoizedState = wl(1 | r, u, void 0, o === void 0 ? null : o);
  }
  function Eo(n, r, u, o) {
    var c = wn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Un !== null) {
      var _ = Un.memoizedState;
      if (d = _.destroy, o !== null && ut(o, _.deps)) {
        c.memoizedState = wl(r, u, d, o);
        return;
      }
    }
    Pt.flags |= n, c.memoizedState = wl(1 | r, u, d, o);
  }
  function Gc(n, r) {
    return _o(8390656, 8, n, r);
  }
  function Ss(n, r) {
    return Eo(2048, 8, n, r);
  }
  function Kc(n, r) {
    return Eo(4, 2, n, r);
  }
  function _s(n, r) {
    return Eo(4, 4, n, r);
  }
  function bl(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function qc(n, r, u) {
    return u = u != null ? u.concat([n]) : null, Eo(4, 4, bl.bind(null, r, n), u);
  }
  function Es() {
  }
  function Xc(n, r) {
    var u = wn();
    r = r === void 0 ? null : r;
    var o = u.memoizedState;
    return o !== null && r !== null && ut(r, o[1]) ? o[0] : (u.memoizedState = [n, r], n);
  }
  function Zc(n, r) {
    var u = wn();
    r = r === void 0 ? null : r;
    var o = u.memoizedState;
    return o !== null && r !== null && ut(r, o[1]) ? o[0] : (n = n(), u.memoizedState = [n, r], n);
  }
  function Ad(n, r, u) {
    return (Zt & 21) === 0 ? (n.baseState && (n.baseState = !1, zn = !0), n.memoizedState = u) : (ni(u, r) || (u = Jl(), Pt.lanes |= u, Li |= u, n.baseState = !0), r);
  }
  function Cs(n, r) {
    var u = jt;
    jt = u !== 0 && 4 > u ? u : 4, n(!0);
    var o = Ft.transition;
    Ft.transition = {};
    try {
      n(!1), r();
    } finally {
      jt = u, Ft.transition = o;
    }
  }
  function Ud() {
    return wn().memoizedState;
  }
  function Rs(n, r, u) {
    var o = Mi(n);
    if (u = { lane: o, action: u, hasEagerState: !1, eagerState: null, next: null }, ea(n)) Gv(r, u);
    else if (u = Od(n, r, u, o), u !== null) {
      var c = Pn();
      Ur(u, n, o, c), tn(u, r, o);
    }
  }
  function xl(n, r, u) {
    var o = Mi(n), c = { lane: o, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (ea(n)) Gv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var _ = r.lastRenderedState, R = d(_, u);
        if (c.hasEagerState = !0, c.eagerState = R, ni(R, _)) {
          var D = r.interleaved;
          D === null ? (c.next = c, Dd(r)) : (c.next = D.next, D.next = c), r.interleaved = c;
          return;
        }
      } catch {
      }
      u = Od(n, r, c, o), u !== null && (c = Pn(), Ur(u, n, o, c), tn(u, r, o));
    }
  }
  function ea(n) {
    var r = n.alternate;
    return n === Pt || r !== null && r === Pt;
  }
  function Gv(n, r) {
    gs = Fc = !0;
    var u = n.pending;
    u === null ? r.next = r : (r.next = u.next, u.next = r), n.pending = r;
  }
  function tn(n, r, u) {
    if ((u & 4194240) !== 0) {
      var o = r.lanes;
      o &= n.pendingLanes, u |= o, r.lanes = u, Ii(n, u);
    }
  }
  var kl = { readContext: Aa, useCallback: zt, useContext: zt, useEffect: zt, useImperativeHandle: zt, useInsertionEffect: zt, useLayoutEffect: zt, useMemo: zt, useReducer: zt, useRef: zt, useState: zt, useDebugValue: zt, useDeferredValue: zt, useTransition: zt, useMutableSource: zt, useSyncExternalStore: zt, useId: zt, unstable_isNewReconciler: !1 }, Jc = { readContext: Aa, useCallback: function(n, r) {
    return Rr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Aa, useEffect: Gc, useImperativeHandle: function(n, r, u) {
    return u = u != null ? u.concat([n]) : null, _o(
      4194308,
      4,
      bl.bind(null, r, n),
      u
    );
  }, useLayoutEffect: function(n, r) {
    return _o(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return _o(4, 2, n, r);
  }, useMemo: function(n, r) {
    var u = Rr();
    return r = r === void 0 ? null : r, n = n(), u.memoizedState = [n, r], n;
  }, useReducer: function(n, r, u) {
    var o = Rr();
    return r = u !== void 0 ? u(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Rs.bind(null, Pt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Rr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Wc, useDebugValue: Es, useDeferredValue: function(n) {
    return Rr().memoizedState = n;
  }, useTransition: function() {
    var n = Wc(!1), r = n[0];
    return n = Cs.bind(null, n[1]), Rr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, u) {
    var o = Pt, c = Rr();
    if (dn) {
      if (u === void 0) throw Error(m(407));
      u = u();
    } else {
      if (u = r(), Qn === null) throw Error(m(349));
      (Zt & 30) !== 0 || Hc(o, r, u);
    }
    c.memoizedState = u;
    var d = { value: u, getSnapshot: r };
    return c.queue = d, Gc(Ic.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, wl(9, Bc.bind(null, o, d, u, r), void 0, null), u;
  }, useId: function() {
    var n = Rr(), r = Qn.identifierPrefix;
    if (dn) {
      var u = bi, o = wi;
      u = (o & ~(1 << 32 - Dr(o) - 1)).toString(32) + u, r = ":" + r + "R" + u, u = Rl++, 0 < u && (r += "H" + u.toString(32)), r += ":";
    } else u = ae++, r = ":" + r + "r" + u.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ts = {
    readContext: Aa,
    useCallback: Xc,
    useContext: Aa,
    useEffect: Ss,
    useImperativeHandle: qc,
    useInsertionEffect: Kc,
    useLayoutEffect: _s,
    useMemo: Zc,
    useReducer: zu,
    useRef: Qc,
    useState: function() {
      return zu(Ji);
    },
    useDebugValue: Es,
    useDeferredValue: function(n) {
      var r = wn();
      return Ad(r, Un.memoizedState, n);
    },
    useTransition: function() {
      var n = zu(Ji)[0], r = wn().memoizedState;
      return [n, r];
    },
    useMutableSource: Pc,
    useSyncExternalStore: Vc,
    useId: Ud,
    unstable_isNewReconciler: !1
  }, ef = { readContext: Aa, useCallback: Xc, useContext: Aa, useEffect: Ss, useImperativeHandle: qc, useInsertionEffect: Kc, useLayoutEffect: _s, useMemo: Zc, useReducer: Tl, useRef: Qc, useState: function() {
    return Tl(Ji);
  }, useDebugValue: Es, useDeferredValue: function(n) {
    var r = wn();
    return Un === null ? r.memoizedState = n : Ad(r, Un.memoizedState, n);
  }, useTransition: function() {
    var n = Tl(Ji)[0], r = wn().memoizedState;
    return [n, r];
  }, useMutableSource: Pc, useSyncExternalStore: Vc, useId: Ud, unstable_isNewReconciler: !1 };
  function ii(n, r) {
    if (n && n.defaultProps) {
      r = fe({}, r), n = n.defaultProps;
      for (var u in n) r[u] === void 0 && (r[u] = n[u]);
      return r;
    }
    return r;
  }
  function zd(n, r, u, o) {
    r = n.memoizedState, u = u(o, r), u = u == null ? r : fe({}, r, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
  }
  var tf = { isMounted: function(n) {
    return (n = n._reactInternals) ? gt(n) === n : !1;
  }, enqueueSetState: function(n, r, u) {
    n = n._reactInternals;
    var o = Pn(), c = Mi(n), d = Zi(o, c);
    d.payload = r, u != null && (d.callback = u), r = Au(n, d, c), r !== null && (Ur(r, n, c, o), Uc(r, n, c));
  }, enqueueReplaceState: function(n, r, u) {
    n = n._reactInternals;
    var o = Pn(), c = Mi(n), d = Zi(o, c);
    d.tag = 1, d.payload = r, u != null && (d.callback = u), r = Au(n, d, c), r !== null && (Ur(r, n, c, o), Uc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var u = Pn(), o = Mi(n), c = Zi(u, o);
    c.tag = 2, r != null && (c.callback = r), r = Au(n, c, o), r !== null && (Ur(r, n, o, u), Uc(r, n, o));
  } };
  function Kv(n, r, u, o, c, d, _) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, _) : r.prototype && r.prototype.isPureReactComponent ? !rs(u, o) || !rs(c, d) : !0;
  }
  function nf(n, r, u) {
    var o = !1, c = Cr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Aa(d) : (c = Nn(r) ? Kr : _n.current, o = r.contextTypes, d = (o = o != null) ? qr(n, c) : Cr), r = new r(u, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = tf, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function qv(n, r, u, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(u, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(u, o), r.state !== n && tf.enqueueReplaceState(r, r.state, null);
  }
  function ws(n, r, u, o) {
    var c = n.stateNode;
    c.props = u, c.state = n.memoizedState, c.refs = {}, Ld(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Aa(d) : (d = Nn(r) ? Kr : _n.current, c.context = qr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (zd(n, r, d, u), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && tf.enqueueReplaceState(c, c.state, null), ps(n, u, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Dl(n, r) {
    try {
      var u = "", o = r;
      do
        u += vt(o), o = o.return;
      while (o);
      var c = u;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function jd(n, r, u) {
    return { value: n, source: null, stack: u ?? null, digest: r ?? null };
  }
  function Fd(n, r) {
    try {
      console.error(r.value);
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  var rf = typeof WeakMap == "function" ? WeakMap : Map;
  function Xv(n, r, u) {
    u = Zi(-1, u), u.tag = 3, u.payload = { element: null };
    var o = r.value;
    return u.callback = function() {
      xo || (xo = !0, Ml = o), Fd(n, r);
    }, u;
  }
  function Pd(n, r, u) {
    u = Zi(-1, u), u.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      u.payload = function() {
        return o(c);
      }, u.callback = function() {
        Fd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (u.callback = function() {
      Fd(n, r), typeof o != "function" && (Pu === null ? Pu = /* @__PURE__ */ new Set([this]) : Pu.add(this));
      var _ = r.stack;
      this.componentDidCatch(r.value, { componentStack: _ !== null ? _ : "" });
    }), u;
  }
  function Vd(n, r, u) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new rf();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(u) || (c.add(u), n = Ay.bind(null, n, r, u), r.then(n, n));
  }
  function Zv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function ju(n, r, u, o, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (r = Zi(-1, 1), r.tag = 2, Au(u, r, 1))), u.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var bs = De.ReactCurrentOwner, zn = !1;
  function or(n, r, u, o) {
    r.child = n === null ? Te(r, null, u, o) : Tn(r, n.child, u, o);
  }
  function ta(n, r, u, o, c) {
    u = u.render;
    var d = r.ref;
    return yn(r, c), o = Uu(n, r, u, o, d, c), u = ai(), n !== null && !zn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && u && Lc(r), r.flags |= 1, or(n, r, o, c), r.child);
  }
  function Ol(n, r, u, o, c) {
    if (n === null) {
      var d = u.type;
      return typeof d == "function" && !ep(d) && d.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (r.tag = 15, r.type = d, _t(n, r, d, o, c)) : (n = Bs(u.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var _ = d.memoizedProps;
      if (u = u.compare, u = u !== null ? u : rs, u(_, o) && n.ref === r.ref) return za(n, r, c);
    }
    return r.flags |= 1, n = Hu(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function _t(n, r, u, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (rs(d, o) && n.ref === r.ref) if (zn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (zn = !0);
      else return r.lanes = n.lanes, za(n, r, c);
    }
    return Jv(n, r, u, o, c);
  }
  function xs(n, r, u) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Qe(To, ga), ga |= u;
    else {
      if ((u & 1073741824) === 0) return n = d !== null ? d.baseLanes | u : u, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Qe(To, ga), ga |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : u, Qe(To, ga), ga |= o;
    }
    else d !== null ? (o = d.baseLanes | u, r.memoizedState = null) : o = u, Qe(To, ga), ga |= o;
    return or(n, r, c, u), r.child;
  }
  function Hd(n, r) {
    var u = r.ref;
    (n === null && u !== null || n !== null && n.ref !== u) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Jv(n, r, u, o, c) {
    var d = Nn(u) ? Kr : _n.current;
    return d = qr(r, d), yn(r, c), u = Uu(n, r, u, o, d, c), o = ai(), n !== null && !zn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && o && Lc(r), r.flags |= 1, or(n, r, u, c), r.child);
  }
  function eh(n, r, u, o, c) {
    if (Nn(u)) {
      var d = !0;
      Zn(r);
    } else d = !1;
    if (yn(r, c), r.stateNode === null) Ua(n, r), nf(r, u, o), ws(r, u, o, c), o = !0;
    else if (n === null) {
      var _ = r.stateNode, R = r.memoizedProps;
      _.props = R;
      var D = _.context, I = u.contextType;
      typeof I == "object" && I !== null ? I = Aa(I) : (I = Nn(u) ? Kr : _n.current, I = qr(r, I));
      var le = u.getDerivedStateFromProps, se = typeof le == "function" || typeof _.getSnapshotBeforeUpdate == "function";
      se || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (R !== o || D !== I) && qv(r, _, o, I), ya = !1;
      var ue = r.memoizedState;
      _.state = ue, ps(r, o, _, c), D = r.memoizedState, R !== o || ue !== D || Yn.current || ya ? (typeof le == "function" && (zd(r, u, le, o), D = r.memoizedState), (R = ya || Kv(r, u, R, o, ue, D, I)) ? (se || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = D), _.props = o, _.state = D, _.context = I, o = R) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      _ = r.stateNode, Yv(n, r), R = r.memoizedProps, I = r.type === r.elementType ? R : ii(r.type, R), _.props = I, se = r.pendingProps, ue = _.context, D = u.contextType, typeof D == "object" && D !== null ? D = Aa(D) : (D = Nn(u) ? Kr : _n.current, D = qr(r, D));
      var Oe = u.getDerivedStateFromProps;
      (le = typeof Oe == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (R !== se || ue !== D) && qv(r, _, o, D), ya = !1, ue = r.memoizedState, _.state = ue, ps(r, o, _, c);
      var Pe = r.memoizedState;
      R !== se || ue !== Pe || Yn.current || ya ? (typeof Oe == "function" && (zd(r, u, Oe, o), Pe = r.memoizedState), (I = ya || Kv(r, u, I, o, ue, Pe, D) || !1) ? (le || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(o, Pe, D), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(o, Pe, D)), typeof _.componentDidUpdate == "function" && (r.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || R === n.memoizedProps && ue === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || R === n.memoizedProps && ue === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Pe), _.props = o, _.state = Pe, _.context = D, o = I) : (typeof _.componentDidUpdate != "function" || R === n.memoizedProps && ue === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || R === n.memoizedProps && ue === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return ks(n, r, u, o, d, c);
  }
  function ks(n, r, u, o, c, d) {
    Hd(n, r);
    var _ = (r.flags & 128) !== 0;
    if (!o && !_) return c && Dc(r, u, !1), za(n, r, d);
    o = r.stateNode, bs.current = r;
    var R = _ && typeof u.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && _ ? (r.child = Tn(r, n.child, null, d), r.child = Tn(r, null, R, d)) : or(n, r, R, d), r.memoizedState = o.state, c && Dc(r, u, !0), r.child;
  }
  function Co(n) {
    var r = n.stateNode;
    r.pendingContext ? Hv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Hv(n, r.context, !1), Nd(n, r.containerInfo);
  }
  function th(n, r, u, o, c) {
    return Nu(), Xi(c), r.flags |= 256, or(n, r, u, o), r.child;
  }
  var af = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Bd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function uf(n, r, u) {
    var o = r.pendingProps, c = gn.current, d = !1, _ = (r.flags & 128) !== 0, R;
    if ((R = _) || (R = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), R ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Qe(gn, c & 1), n === null)
      return Td(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (_ = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, _ = { mode: "hidden", children: _ }, (o & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = _) : d = Bu(_, o, 0, null), n = ru(n, o, u, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Bd(u), r.memoizedState = af, n) : Id(r, _));
    if (c = n.memoizedState, c !== null && (R = c.dehydrated, R !== null)) return nh(n, r, _, o, R, c, u);
    if (d) {
      d = o.fallback, _ = r.mode, c = n.child, R = c.sibling;
      var D = { mode: "hidden", children: o.children };
      return (_ & 1) === 0 && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = D, r.deletions = null) : (o = Hu(c, D), o.subtreeFlags = c.subtreeFlags & 14680064), R !== null ? d = Hu(R, d) : (d = ru(d, _, u, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, _ = n.child.memoizedState, _ = _ === null ? Bd(u) : { baseLanes: _.baseLanes | u, cachePool: null, transitions: _.transitions }, d.memoizedState = _, d.childLanes = n.childLanes & ~u, r.memoizedState = af, o;
    }
    return d = n.child, n = d.sibling, o = Hu(d, { mode: "visible", children: o.children }), (r.mode & 1) === 0 && (o.lanes = u), o.return = r, o.sibling = null, n !== null && (u = r.deletions, u === null ? (r.deletions = [n], r.flags |= 16) : u.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Id(n, r) {
    return r = Bu({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ds(n, r, u, o) {
    return o !== null && Xi(o), Tn(r, n.child, null, u), n = Id(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function nh(n, r, u, o, c, d, _) {
    if (u)
      return r.flags & 256 ? (r.flags &= -257, o = jd(Error(m(422))), Ds(n, r, _, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Bu({ mode: "visible", children: o.children }, c, 0, null), d = ru(d, c, _, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, (r.mode & 1) !== 0 && Tn(r, n.child, null, _), r.child.memoizedState = Bd(_), r.memoizedState = af, d);
    if ((r.mode & 1) === 0) return Ds(n, r, _, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var R = o.dgst;
      return o = R, d = Error(m(419)), o = jd(d, o, void 0), Ds(n, r, _, o);
    }
    if (R = (_ & n.childLanes) !== 0, zn || R) {
      if (o = Qn, o !== null) {
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
        c = (c & (o.suspendedLanes | _)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, ma(n, c), Ur(o, n, c, -1));
      }
      return Jd(), o = jd(Error(m(421))), Ds(n, r, _, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Uy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Zr = Ei(c.nextSibling), Xr = r, dn = !0, Na = null, n !== null && (An[Ma++] = wi, An[Ma++] = bi, An[Ma++] = va, wi = n.id, bi = n.overflow, va = r), r = Id(r, o.children), r.flags |= 4096, r);
  }
  function $d(n, r, u) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), kd(n.return, r, u);
  }
  function Mr(n, r, u, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: u, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = u, d.tailMode = c);
  }
  function ki(n, r, u) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (or(n, r, o.children, u), o = gn.current, (o & 2) !== 0) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && $d(n, u, r);
        else if (n.tag === 19) $d(n, u, r);
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
      o &= 1;
    }
    if (Qe(gn, o), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (u = r.child, c = null; u !== null; ) n = u.alternate, n !== null && jc(n) === null && (c = u), u = u.sibling;
        u = c, u === null ? (c = r.child, r.child = null) : (c = u.sibling, u.sibling = null), Mr(r, !1, c, u, d);
        break;
      case "backwards":
        for (u = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && jc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = u, u = c, c = n;
        }
        Mr(r, !0, u, null, d);
        break;
      case "together":
        Mr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ua(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function za(n, r, u) {
    if (n !== null && (r.dependencies = n.dependencies), Li |= r.lanes, (u & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(m(153));
    if (r.child !== null) {
      for (n = r.child, u = Hu(n, n.pendingProps), r.child = u, u.return = r; n.sibling !== null; ) n = n.sibling, u = u.sibling = Hu(n, n.pendingProps), u.return = r;
      u.sibling = null;
    }
    return r.child;
  }
  function Os(n, r, u) {
    switch (r.tag) {
      case 3:
        Co(r), Nu();
        break;
      case 5:
        Qv(r);
        break;
      case 1:
        Nn(r.type) && Zn(r);
        break;
      case 4:
        Nd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Qe(ha, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Qe(gn, gn.current & 1), r.flags |= 128, null) : (u & r.child.childLanes) !== 0 ? uf(n, r, u) : (Qe(gn, gn.current & 1), n = za(n, r, u), n !== null ? n.sibling : null);
        Qe(gn, gn.current & 1);
        break;
      case 19:
        if (o = (u & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (o) return ki(n, r, u);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Qe(gn, gn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, xs(n, r, u);
    }
    return za(n, r, u);
  }
  var ja, jn, rh, ah;
  ja = function(n, r) {
    for (var u = r.child; u !== null; ) {
      if (u.tag === 5 || u.tag === 6) n.appendChild(u.stateNode);
      else if (u.tag !== 4 && u.child !== null) {
        u.child.return = u, u = u.child;
        continue;
      }
      if (u === r) break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === r) return;
        u = u.return;
      }
      u.sibling.return = u.return, u = u.sibling;
    }
  }, jn = function() {
  }, rh = function(n, r, u, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, El(xi.current);
      var d = null;
      switch (u) {
        case "input":
          c = rr(n, c), o = rr(n, o), d = [];
          break;
        case "select":
          c = fe({}, c, { value: void 0 }), o = fe({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = In(n, c), o = In(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = xu);
      }
      on(u, o);
      var _;
      u = null;
      for (I in c) if (!o.hasOwnProperty(I) && c.hasOwnProperty(I) && c[I] != null) if (I === "style") {
        var R = c[I];
        for (_ in R) R.hasOwnProperty(_) && (u || (u = {}), u[_] = "");
      } else I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (U.hasOwnProperty(I) ? d || (d = []) : (d = d || []).push(I, null));
      for (I in o) {
        var D = o[I];
        if (R = c?.[I], o.hasOwnProperty(I) && D !== R && (D != null || R != null)) if (I === "style") if (R) {
          for (_ in R) !R.hasOwnProperty(_) || D && D.hasOwnProperty(_) || (u || (u = {}), u[_] = "");
          for (_ in D) D.hasOwnProperty(_) && R[_] !== D[_] && (u || (u = {}), u[_] = D[_]);
        } else u || (d || (d = []), d.push(
          I,
          u
        )), u = D;
        else I === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, R = R ? R.__html : void 0, D != null && R !== D && (d = d || []).push(I, D)) : I === "children" ? typeof D != "string" && typeof D != "number" || (d = d || []).push(I, "" + D) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (U.hasOwnProperty(I) ? (D != null && I === "onScroll" && $t("scroll", n), d || R === D || (d = [])) : (d = d || []).push(I, D));
      }
      u && (d = d || []).push("style", u);
      var I = d;
      (r.updateQueue = I) && (r.flags |= 4);
    }
  }, ah = function(n, r, u, o) {
    u !== o && (r.flags |= 4);
  };
  function Ls(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var u = null; r !== null; ) r.alternate !== null && (u = r), r = r.sibling;
        u === null ? n.tail = null : u.sibling = null;
        break;
      case "collapsed":
        u = n.tail;
        for (var o = null; u !== null; ) u.alternate !== null && (o = u), u = u.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function er(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, u = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) u |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) u |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = u, r;
  }
  function ih(n, r, u) {
    var o = r.pendingProps;
    switch (Mc(r), r.tag) {
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
        return er(r), null;
      case 1:
        return Nn(r.type) && yo(), er(r), null;
      case 3:
        return o = r.stateNode, Cl(), ln(Yn), ln(_n), qe(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Nc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Na !== null && (Nl(Na), Na = null))), jn(n, r), er(r), null;
      case 5:
        zc(r);
        var c = El(ms.current);
        if (u = r.type, n !== null && r.stateNode != null) rh(n, r, u, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(m(166));
            return er(r), null;
          }
          if (n = El(xi.current), Nc(r)) {
            o = r.stateNode, u = r.type;
            var d = r.memoizedProps;
            switch (o[Ci] = r, o[ss] = d, n = (r.mode & 1) !== 0, u) {
              case "dialog":
                $t("cancel", o), $t("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                $t("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < us.length; c++) $t(us[c], o);
                break;
              case "source":
                $t("error", o);
                break;
              case "img":
              case "image":
              case "link":
                $t(
                  "error",
                  o
                ), $t("load", o);
                break;
              case "details":
                $t("toggle", o);
                break;
              case "input":
                Hn(o, d), $t("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, $t("invalid", o);
                break;
              case "textarea":
                Sr(o, d), $t("invalid", o);
            }
            on(u, d), c = null;
            for (var _ in d) if (d.hasOwnProperty(_)) {
              var R = d[_];
              _ === "children" ? typeof R == "string" ? o.textContent !== R && (d.suppressHydrationWarning !== !0 && wc(o.textContent, R, n), c = ["children", R]) : typeof R == "number" && o.textContent !== "" + R && (d.suppressHydrationWarning !== !0 && wc(
                o.textContent,
                R,
                n
              ), c = ["children", "" + R]) : U.hasOwnProperty(_) && R != null && _ === "onScroll" && $t("scroll", o);
            }
            switch (u) {
              case "input":
                On(o), fi(o, d, !0);
                break;
              case "textarea":
                On(o), Ln(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = xu);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            _ = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = _r(u)), n === "http://www.w3.org/1999/xhtml" ? u === "script" ? (n = _.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = _.createElement(u, { is: o.is }) : (n = _.createElement(u), u === "select" && (_ = n, o.multiple ? _.multiple = !0 : o.size && (_.size = o.size))) : n = _.createElementNS(n, u), n[Ci] = r, n[ss] = o, ja(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (_ = Xn(u, o), u) {
                case "dialog":
                  $t("cancel", n), $t("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  $t("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < us.length; c++) $t(us[c], n);
                  c = o;
                  break;
                case "source":
                  $t("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  $t(
                    "error",
                    n
                  ), $t("load", n), c = o;
                  break;
                case "details":
                  $t("toggle", n), c = o;
                  break;
                case "input":
                  Hn(n, o), c = rr(n, o), $t("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = fe({}, o, { value: void 0 }), $t("invalid", n);
                  break;
                case "textarea":
                  Sr(n, o), c = In(n, o), $t("invalid", n);
                  break;
                default:
                  c = o;
              }
              on(u, c), R = c;
              for (d in R) if (R.hasOwnProperty(d)) {
                var D = R[d];
                d === "style" ? nn(n, D) : d === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, D != null && di(n, D)) : d === "children" ? typeof D == "string" ? (u !== "textarea" || D !== "") && ye(n, D) : typeof D == "number" && ye(n, "" + D) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (U.hasOwnProperty(d) ? D != null && d === "onScroll" && $t("scroll", n) : D != null && Ee(n, d, D, _));
              }
              switch (u) {
                case "input":
                  On(n), fi(n, o, !1);
                  break;
                case "textarea":
                  On(n), Ln(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + it(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Cn(n, !!o.multiple, d, !1) : o.defaultValue != null && Cn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = xu);
              }
              switch (u) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return er(r), null;
      case 6:
        if (n && r.stateNode != null) ah(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(m(166));
          if (u = El(ms.current), El(xi.current), Nc(r)) {
            if (o = r.stateNode, u = r.memoizedProps, o[Ci] = r, (d = o.nodeValue !== u) && (n = Xr, n !== null)) switch (n.tag) {
              case 3:
                wc(o.nodeValue, u, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && wc(o.nodeValue, u, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(o), o[Ci] = r, r.stateNode = o;
        }
        return er(r), null;
      case 13:
        if (ln(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && Zr !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) ds(), Nu(), r.flags |= 98560, d = !1;
          else if (d = Nc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(m(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(m(317));
              d[Ci] = r;
            } else Nu(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            er(r), d = !1;
          } else Na !== null && (Nl(Na), Na = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = u, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (gn.current & 1) !== 0 ? xn === 0 && (xn = 3) : Jd())), r.updateQueue !== null && (r.flags |= 4), er(r), null);
      case 4:
        return Cl(), jn(n, r), n === null && fo(r.stateNode.containerInfo), er(r), null;
      case 10:
        return xd(r.type._context), er(r), null;
      case 17:
        return Nn(r.type) && yo(), er(r), null;
      case 19:
        if (ln(gn), d = r.memoizedState, d === null) return er(r), null;
        if (o = (r.flags & 128) !== 0, _ = d.rendering, _ === null) if (o) Ls(d, !1);
        else {
          if (xn !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (_ = jc(n), _ !== null) {
              for (r.flags |= 128, Ls(d, !1), o = _.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = u, u = r.child; u !== null; ) d = u, n = o, d.flags &= 14680066, _ = d.alternate, _ === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = _.childLanes, d.lanes = _.lanes, d.child = _.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = _.memoizedProps, d.memoizedState = _.memoizedState, d.updateQueue = _.updateQueue, d.type = _.type, n = _.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), u = u.sibling;
              return Qe(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && St() > bo && (r.flags |= 128, o = !0, Ls(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = jc(_), n !== null) {
            if (r.flags |= 128, o = !0, u = n.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), Ls(d, !0), d.tail === null && d.tailMode === "hidden" && !_.alternate && !dn) return er(r), null;
          } else 2 * St() - d.renderingStartTime > bo && u !== 1073741824 && (r.flags |= 128, o = !0, Ls(d, !1), r.lanes = 4194304);
          d.isBackwards ? (_.sibling = r.child, r.child = _) : (u = d.last, u !== null ? u.sibling = _ : r.child = _, d.last = _);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = St(), r.sibling = null, u = gn.current, Qe(gn, o ? u & 1 | 2 : u & 1), r) : (er(r), null);
      case 22:
      case 23:
        return Zd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && (r.mode & 1) !== 0 ? (ga & 1073741824) !== 0 && (er(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : er(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, r.tag));
  }
  function lf(n, r) {
    switch (Mc(r), r.tag) {
      case 1:
        return Nn(r.type) && yo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Cl(), ln(Yn), ln(_n), qe(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return zc(r), null;
      case 13:
        if (ln(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(m(340));
          Nu();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return ln(gn), null;
      case 4:
        return Cl(), null;
      case 10:
        return xd(r.type._context), null;
      case 22:
      case 23:
        return Zd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ms = !1, Tr = !1, ky = typeof WeakSet == "function" ? WeakSet : Set, Ue = null;
  function Ro(n, r) {
    var u = n.ref;
    if (u !== null) if (typeof u == "function") try {
      u(null);
    } catch (o) {
      pn(n, r, o);
    }
    else u.current = null;
  }
  function of(n, r, u) {
    try {
      u();
    } catch (o) {
      pn(n, r, o);
    }
  }
  var uh = !1;
  function lh(n, r) {
    if (os = ka, n = as(), yc(n)) {
      if ("selectionStart" in n) var u = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        u = (u = n.ownerDocument) && u.defaultView || window;
        var o = u.getSelection && u.getSelection();
        if (o && o.rangeCount !== 0) {
          u = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            u.nodeType, d.nodeType;
          } catch {
            u = null;
            break e;
          }
          var _ = 0, R = -1, D = -1, I = 0, le = 0, se = n, ue = null;
          t: for (; ; ) {
            for (var Oe; se !== u || c !== 0 && se.nodeType !== 3 || (R = _ + c), se !== d || o !== 0 && se.nodeType !== 3 || (D = _ + o), se.nodeType === 3 && (_ += se.nodeValue.length), (Oe = se.firstChild) !== null; )
              ue = se, se = Oe;
            for (; ; ) {
              if (se === n) break t;
              if (ue === u && ++I === c && (R = _), ue === d && ++le === o && (D = _), (Oe = se.nextSibling) !== null) break;
              se = ue, ue = se.parentNode;
            }
            se = Oe;
          }
          u = R === -1 || D === -1 ? null : { start: R, end: D };
        } else u = null;
      }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (hl = { focusedElem: n, selectionRange: u }, ka = !1, Ue = r; Ue !== null; ) if (r = Ue, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Ue = n;
    else for (; Ue !== null; ) {
      r = Ue;
      try {
        var Pe = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Pe !== null) {
              var Ie = Pe.memoizedProps, kn = Pe.memoizedState, j = r.stateNode, M = j.getSnapshotBeforeUpdate(r.elementType === r.type ? Ie : ii(r.type, Ie), kn);
              j.__reactInternalSnapshotBeforeUpdate = M;
            }
            break;
          case 3:
            var V = r.stateNode.containerInfo;
            V.nodeType === 1 ? V.textContent = "" : V.nodeType === 9 && V.documentElement && V.removeChild(V.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(m(163));
        }
      } catch (oe) {
        pn(r, r.return, oe);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Ue = n;
        break;
      }
      Ue = r.return;
    }
    return Pe = uh, uh = !1, Pe;
  }
  function Ns(n, r, u) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && of(r, u, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function As(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var u = r = r.next;
      do {
        if ((u.tag & n) === n) {
          var o = u.create;
          u.destroy = o();
        }
        u = u.next;
      } while (u !== r);
    }
  }
  function Yd(n) {
    var r = n.ref;
    if (r !== null) {
      var u = n.stateNode;
      n.tag, n = u, typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function sf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, sf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ci], delete r[ss], delete r[cs], delete r[mo], delete r[by])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Us(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function eu(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Us(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Di(n, r, u) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? u.nodeType === 8 ? u.parentNode.insertBefore(n, r) : u.insertBefore(n, r) : (u.nodeType === 8 ? (r = u.parentNode, r.insertBefore(n, u)) : (r = u, r.appendChild(n)), u = u._reactRootContainer, u != null || r.onclick !== null || (r.onclick = xu));
    else if (o !== 4 && (n = n.child, n !== null)) for (Di(n, r, u), n = n.sibling; n !== null; ) Di(n, r, u), n = n.sibling;
  }
  function Oi(n, r, u) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? u.insertBefore(n, r) : u.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Oi(n, r, u), n = n.sibling; n !== null; ) Oi(n, r, u), n = n.sibling;
  }
  var bn = null, Nr = !1;
  function Ar(n, r, u) {
    for (u = u.child; u !== null; ) oh(n, r, u), u = u.sibling;
  }
  function oh(n, r, u) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function") try {
      Qr.onCommitFiberUnmount(gu, u);
    } catch {
    }
    switch (u.tag) {
      case 5:
        Tr || Ro(u, r);
      case 6:
        var o = bn, c = Nr;
        bn = null, Ar(n, r, u), bn = o, Nr = c, bn !== null && (Nr ? (n = bn, u = u.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(u) : n.removeChild(u)) : bn.removeChild(u.stateNode));
        break;
      case 18:
        bn !== null && (Nr ? (n = bn, u = u.stateNode, n.nodeType === 8 ? ho(n.parentNode, u) : n.nodeType === 1 && ho(n, u), ei(n)) : ho(bn, u.stateNode));
        break;
      case 4:
        o = bn, c = Nr, bn = u.stateNode.containerInfo, Nr = !0, Ar(n, r, u), bn = o, Nr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tr && (o = u.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, _ = d.destroy;
            d = d.tag, _ !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && of(u, r, _), c = c.next;
          } while (c !== o);
        }
        Ar(n, r, u);
        break;
      case 1:
        if (!Tr && (Ro(u, r), o = u.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = u.memoizedProps, o.state = u.memoizedState, o.componentWillUnmount();
        } catch (R) {
          pn(u, r, R);
        }
        Ar(n, r, u);
        break;
      case 21:
        Ar(n, r, u);
        break;
      case 22:
        u.mode & 1 ? (Tr = (o = Tr) || u.memoizedState !== null, Ar(n, r, u), Tr = o) : Ar(n, r, u);
        break;
      default:
        Ar(n, r, u);
    }
  }
  function sh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var u = n.stateNode;
      u === null && (u = n.stateNode = new ky()), r.forEach(function(o) {
        var c = gh.bind(null, n, o);
        u.has(o) || (u.add(o), o.then(c, c));
      });
    }
  }
  function ui(n, r) {
    var u = r.deletions;
    if (u !== null) for (var o = 0; o < u.length; o++) {
      var c = u[o];
      try {
        var d = n, _ = r, R = _;
        e: for (; R !== null; ) {
          switch (R.tag) {
            case 5:
              bn = R.stateNode, Nr = !1;
              break e;
            case 3:
              bn = R.stateNode.containerInfo, Nr = !0;
              break e;
            case 4:
              bn = R.stateNode.containerInfo, Nr = !0;
              break e;
          }
          R = R.return;
        }
        if (bn === null) throw Error(m(160));
        oh(d, _, c), bn = null, Nr = !1;
        var D = c.alternate;
        D !== null && (D.return = null), c.return = null;
      } catch (I) {
        pn(c, r, I);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Wd(r, n), r = r.sibling;
  }
  function Wd(n, r) {
    var u = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ui(r, n), na(n), o & 4) {
          try {
            Ns(3, n, n.return), As(3, n);
          } catch (Ie) {
            pn(n, n.return, Ie);
          }
          try {
            Ns(5, n, n.return);
          } catch (Ie) {
            pn(n, n.return, Ie);
          }
        }
        break;
      case 1:
        ui(r, n), na(n), o & 512 && u !== null && Ro(u, u.return);
        break;
      case 5:
        if (ui(r, n), na(n), o & 512 && u !== null && Ro(u, u.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ye(c, "");
          } catch (Ie) {
            pn(n, n.return, Ie);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, _ = u !== null ? u.memoizedProps : d, R = n.type, D = n.updateQueue;
          if (n.updateQueue = null, D !== null) try {
            R === "input" && d.type === "radio" && d.name != null && Bn(c, d), Xn(R, _);
            var I = Xn(R, d);
            for (_ = 0; _ < D.length; _ += 2) {
              var le = D[_], se = D[_ + 1];
              le === "style" ? nn(c, se) : le === "dangerouslySetInnerHTML" ? di(c, se) : le === "children" ? ye(c, se) : Ee(c, le, se, I);
            }
            switch (R) {
              case "input":
                Wr(c, d);
                break;
              case "textarea":
                Wa(c, d);
                break;
              case "select":
                var ue = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var Oe = d.value;
                Oe != null ? Cn(c, !!d.multiple, Oe, !1) : ue !== !!d.multiple && (d.defaultValue != null ? Cn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Cn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ss] = d;
          } catch (Ie) {
            pn(n, n.return, Ie);
          }
        }
        break;
      case 6:
        if (ui(r, n), na(n), o & 4) {
          if (n.stateNode === null) throw Error(m(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ie) {
            pn(n, n.return, Ie);
          }
        }
        break;
      case 3:
        if (ui(r, n), na(n), o & 4 && u !== null && u.memoizedState.isDehydrated) try {
          ei(r.containerInfo);
        } catch (Ie) {
          pn(n, n.return, Ie);
        }
        break;
      case 4:
        ui(r, n), na(n);
        break;
      case 13:
        ui(r, n), na(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Kd = St())), o & 4 && sh(n);
        break;
      case 22:
        if (le = u !== null && u.memoizedState !== null, n.mode & 1 ? (Tr = (I = Tr) || le, ui(r, n), Tr = I) : ui(r, n), na(n), o & 8192) {
          if (I = n.memoizedState !== null, (n.stateNode.isHidden = I) && !le && (n.mode & 1) !== 0) for (Ue = n, le = n.child; le !== null; ) {
            for (se = Ue = le; Ue !== null; ) {
              switch (ue = Ue, Oe = ue.child, ue.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ns(4, ue, ue.return);
                  break;
                case 1:
                  Ro(ue, ue.return);
                  var Pe = ue.stateNode;
                  if (typeof Pe.componentWillUnmount == "function") {
                    o = ue, u = ue.return;
                    try {
                      r = o, Pe.props = r.memoizedProps, Pe.state = r.memoizedState, Pe.componentWillUnmount();
                    } catch (Ie) {
                      pn(o, u, Ie);
                    }
                  }
                  break;
                case 5:
                  Ro(ue, ue.return);
                  break;
                case 22:
                  if (ue.memoizedState !== null) {
                    zs(se);
                    continue;
                  }
              }
              Oe !== null ? (Oe.return = ue, Ue = Oe) : zs(se);
            }
            le = le.sibling;
          }
          e: for (le = null, se = n; ; ) {
            if (se.tag === 5) {
              if (le === null) {
                le = se;
                try {
                  c = se.stateNode, I ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (R = se.stateNode, D = se.memoizedProps.style, _ = D != null && D.hasOwnProperty("display") ? D.display : null, R.style.display = It("display", _));
                } catch (Ie) {
                  pn(n, n.return, Ie);
                }
              }
            } else if (se.tag === 6) {
              if (le === null) try {
                se.stateNode.nodeValue = I ? "" : se.memoizedProps;
              } catch (Ie) {
                pn(n, n.return, Ie);
              }
            } else if ((se.tag !== 22 && se.tag !== 23 || se.memoizedState === null || se === n) && se.child !== null) {
              se.child.return = se, se = se.child;
              continue;
            }
            if (se === n) break e;
            for (; se.sibling === null; ) {
              if (se.return === null || se.return === n) break e;
              le === se && (le = null), se = se.return;
            }
            le === se && (le = null), se.sibling.return = se.return, se = se.sibling;
          }
        }
        break;
      case 19:
        ui(r, n), na(n), o & 4 && sh(n);
        break;
      case 21:
        break;
      default:
        ui(
          r,
          n
        ), na(n);
    }
  }
  function na(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var u = n.return; u !== null; ) {
            if (Us(u)) {
              var o = u;
              break e;
            }
            u = u.return;
          }
          throw Error(m(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ye(c, ""), o.flags &= -33);
            var d = eu(n);
            Oi(n, d, c);
            break;
          case 3:
          case 4:
            var _ = o.stateNode.containerInfo, R = eu(n);
            Di(n, R, _);
            break;
          default:
            throw Error(m(161));
        }
      } catch (D) {
        pn(n, n.return, D);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Dy(n, r, u) {
    Ue = n, Qd(n);
  }
  function Qd(n, r, u) {
    for (var o = (n.mode & 1) !== 0; Ue !== null; ) {
      var c = Ue, d = c.child;
      if (c.tag === 22 && o) {
        var _ = c.memoizedState !== null || Ms;
        if (!_) {
          var R = c.alternate, D = R !== null && R.memoizedState !== null || Tr;
          R = Ms;
          var I = Tr;
          if (Ms = _, (Tr = D) && !I) for (Ue = c; Ue !== null; ) _ = Ue, D = _.child, _.tag === 22 && _.memoizedState !== null ? Gd(c) : D !== null ? (D.return = _, Ue = D) : Gd(c);
          for (; d !== null; ) Ue = d, Qd(d), d = d.sibling;
          Ue = c, Ms = R, Tr = I;
        }
        ch(n);
      } else (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, Ue = d) : ch(n);
    }
  }
  function ch(n) {
    for (; Ue !== null; ) {
      var r = Ue;
      if ((r.flags & 8772) !== 0) {
        var u = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Tr || As(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Tr) if (u === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? u.memoizedProps : ii(r.type, u.memoizedProps);
                o.componentDidUpdate(c, u.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Md(r, d, o);
              break;
            case 3:
              var _ = r.updateQueue;
              if (_ !== null) {
                if (u = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    u = r.child.stateNode;
                    break;
                  case 1:
                    u = r.child.stateNode;
                }
                Md(r, _, u);
              }
              break;
            case 5:
              var R = r.stateNode;
              if (u === null && r.flags & 4) {
                u = R;
                var D = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    D.autoFocus && u.focus();
                    break;
                  case "img":
                    D.src && (u.src = D.src);
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
                var I = r.alternate;
                if (I !== null) {
                  var le = I.memoizedState;
                  if (le !== null) {
                    var se = le.dehydrated;
                    se !== null && ei(se);
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
          Tr || r.flags & 512 && Yd(r);
        } catch (ue) {
          pn(r, r.return, ue);
        }
      }
      if (r === n) {
        Ue = null;
        break;
      }
      if (u = r.sibling, u !== null) {
        u.return = r.return, Ue = u;
        break;
      }
      Ue = r.return;
    }
  }
  function zs(n) {
    for (; Ue !== null; ) {
      var r = Ue;
      if (r === n) {
        Ue = null;
        break;
      }
      var u = r.sibling;
      if (u !== null) {
        u.return = r.return, Ue = u;
        break;
      }
      Ue = r.return;
    }
  }
  function Gd(n) {
    for (; Ue !== null; ) {
      var r = Ue;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var u = r.return;
            try {
              As(4, r);
            } catch (D) {
              pn(r, u, D);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (D) {
                pn(r, c, D);
              }
            }
            var d = r.return;
            try {
              Yd(r);
            } catch (D) {
              pn(r, d, D);
            }
            break;
          case 5:
            var _ = r.return;
            try {
              Yd(r);
            } catch (D) {
              pn(r, _, D);
            }
        }
      } catch (D) {
        pn(r, r.return, D);
      }
      if (r === n) {
        Ue = null;
        break;
      }
      var R = r.sibling;
      if (R !== null) {
        R.return = r.return, Ue = R;
        break;
      }
      Ue = r.return;
    }
  }
  var Oy = Math.ceil, Fu = De.ReactCurrentDispatcher, Ll = De.ReactCurrentOwner, sr = De.ReactCurrentBatchConfig, Lt = 0, Qn = null, Fn = null, cr = 0, ga = 0, To = La(0), xn = 0, js = null, Li = 0, wo = 0, cf = 0, Fs = null, ra = null, Kd = 0, bo = 1 / 0, Sa = null, xo = !1, Ml = null, Pu = null, ff = !1, tu = null, Ps = 0, Vu = 0, ko = null, Vs = -1, wr = 0;
  function Pn() {
    return (Lt & 6) !== 0 ? St() : Vs !== -1 ? Vs : Vs = St();
  }
  function Mi(n) {
    return (n.mode & 1) === 0 ? 1 : (Lt & 2) !== 0 && cr !== 0 ? cr & -cr : xy.transition !== null ? (wr === 0 && (wr = Jl()), wr) : (n = jt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : uo(n.type)), n);
  }
  function Ur(n, r, u, o) {
    if (50 < Vu) throw Vu = 0, ko = null, Error(m(185));
    Bi(n, u, o), ((Lt & 2) === 0 || n !== Qn) && (n === Qn && ((Lt & 2) === 0 && (wo |= u), xn === 4 && li(n, cr)), aa(n, o), u === 1 && Lt === 0 && (r.mode & 1) === 0 && (bo = St() + 500, go && Ti()));
  }
  function aa(n, r) {
    var u = n.callbackNode;
    ul(n, r);
    var o = Ja(n, n === Qn ? cr : 0);
    if (o === 0) u !== null && ir(u), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (u != null && ir(u), r === 1) n.tag === 0 ? Du(qd.bind(null, n)) : Oc(qd.bind(null, n)), vo(function() {
        (Lt & 6) === 0 && Ti();
      }), u = null;
      else {
        switch (to(o)) {
          case 1:
            u = Xa;
            break;
          case 4:
            u = al;
            break;
          case 16:
            u = il;
            break;
          case 536870912:
            u = ql;
            break;
          default:
            u = il;
        }
        u = _h(u, df.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = u;
    }
  }
  function df(n, r) {
    if (Vs = -1, wr = 0, (Lt & 6) !== 0) throw Error(m(327));
    var u = n.callbackNode;
    if (Do() && n.callbackNode !== u) return null;
    var o = Ja(n, n === Qn ? cr : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & n.expiredLanes) !== 0 || r) r = pf(n, o);
    else {
      r = o;
      var c = Lt;
      Lt |= 2;
      var d = dh();
      (Qn !== n || cr !== r) && (Sa = null, bo = St() + 500, nu(n, r));
      do
        try {
          ph();
          break;
        } catch (R) {
          fh(n, R);
        }
      while (!0);
      bd(), Fu.current = d, Lt = c, Fn !== null ? r = 0 : (Qn = null, cr = 0, r = xn);
    }
    if (r !== 0) {
      if (r === 2 && (c = _u(n), c !== 0 && (o = c, r = Hs(n, c))), r === 1) throw u = js, nu(n, 0), li(n, o), aa(n, St()), u;
      if (r === 6) li(n, o);
      else {
        if (c = n.current.alternate, (o & 30) === 0 && !Ly(c) && (r = pf(n, o), r === 2 && (d = _u(n), d !== 0 && (o = d, r = Hs(n, d))), r === 1)) throw u = js, nu(n, 0), li(n, o), aa(n, St()), u;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            Ul(n, ra, Sa);
            break;
          case 3:
            if (li(n, o), (o & 130023424) === o && (r = Kd + 500 - St(), 10 < r)) {
              if (Ja(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Pn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = xc(Ul.bind(null, n, ra, Sa), r);
              break;
            }
            Ul(n, ra, Sa);
            break;
          case 4:
            if (li(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var _ = 31 - Dr(o);
              d = 1 << _, _ = r[_], _ > c && (c = _), o &= ~d;
            }
            if (o = c, o = St() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Oy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = xc(Ul.bind(null, n, ra, Sa), o);
              break;
            }
            Ul(n, ra, Sa);
            break;
          case 5:
            Ul(n, ra, Sa);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return aa(n, St()), n.callbackNode === u ? df.bind(null, n) : null;
  }
  function Hs(n, r) {
    var u = Fs;
    return n.current.memoizedState.isDehydrated && (nu(n, r).flags |= 256), n = pf(n, r), n !== 2 && (r = ra, ra = u, r !== null && Nl(r)), n;
  }
  function Nl(n) {
    ra === null ? ra = n : ra.push.apply(ra, n);
  }
  function Ly(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var u = r.updateQueue;
        if (u !== null && (u = u.stores, u !== null)) for (var o = 0; o < u.length; o++) {
          var c = u[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ni(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (u = r.child, r.subtreeFlags & 16384 && u !== null) u.return = r, r = u;
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
  function li(n, r) {
    for (r &= ~cf, r &= ~wo, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var u = 31 - Dr(r), o = 1 << u;
      n[u] = -1, r &= ~o;
    }
  }
  function qd(n) {
    if ((Lt & 6) !== 0) throw Error(m(327));
    Do();
    var r = Ja(n, 0);
    if ((r & 1) === 0) return aa(n, St()), null;
    var u = pf(n, r);
    if (n.tag !== 0 && u === 2) {
      var o = _u(n);
      o !== 0 && (r = o, u = Hs(n, o));
    }
    if (u === 1) throw u = js, nu(n, 0), li(n, r), aa(n, St()), u;
    if (u === 6) throw Error(m(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ul(n, ra, Sa), aa(n, St()), null;
  }
  function Xd(n, r) {
    var u = Lt;
    Lt |= 1;
    try {
      return n(r);
    } finally {
      Lt = u, Lt === 0 && (bo = St() + 500, go && Ti());
    }
  }
  function Al(n) {
    tu !== null && tu.tag === 0 && (Lt & 6) === 0 && Do();
    var r = Lt;
    Lt |= 1;
    var u = sr.transition, o = jt;
    try {
      if (sr.transition = null, jt = 1, n) return n();
    } finally {
      jt = o, sr.transition = u, Lt = r, (Lt & 6) === 0 && Ti();
    }
  }
  function Zd() {
    ga = To.current, ln(To);
  }
  function nu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var u = n.timeoutHandle;
    if (u !== -1 && (n.timeoutHandle = -1, Ed(u)), Fn !== null) for (u = Fn.return; u !== null; ) {
      var o = u;
      switch (Mc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && yo();
          break;
        case 3:
          Cl(), ln(Yn), ln(_n), qe();
          break;
        case 5:
          zc(o);
          break;
        case 4:
          Cl();
          break;
        case 13:
          ln(gn);
          break;
        case 19:
          ln(gn);
          break;
        case 10:
          xd(o.type._context);
          break;
        case 22:
        case 23:
          Zd();
      }
      u = u.return;
    }
    if (Qn = n, Fn = n = Hu(n.current, null), cr = ga = r, xn = 0, js = null, cf = wo = Li = 0, ra = Fs = null, _l !== null) {
      for (r = 0; r < _l.length; r++) if (u = _l[r], o = u.interleaved, o !== null) {
        u.interleaved = null;
        var c = o.next, d = u.pending;
        if (d !== null) {
          var _ = d.next;
          d.next = c, o.next = _;
        }
        u.pending = o;
      }
      _l = null;
    }
    return n;
  }
  function fh(n, r) {
    do {
      var u = Fn;
      try {
        if (bd(), wt.current = kl, Fc) {
          for (var o = Pt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Fc = !1;
        }
        if (Zt = 0, Jn = Un = Pt = null, gs = !1, Rl = 0, Ll.current = null, u === null || u.return === null) {
          xn = 1, js = r, Fn = null;
          break;
        }
        e: {
          var d = n, _ = u.return, R = u, D = r;
          if (r = cr, R.flags |= 32768, D !== null && typeof D == "object" && typeof D.then == "function") {
            var I = D, le = R, se = le.tag;
            if ((le.mode & 1) === 0 && (se === 0 || se === 11 || se === 15)) {
              var ue = le.alternate;
              ue ? (le.updateQueue = ue.updateQueue, le.memoizedState = ue.memoizedState, le.lanes = ue.lanes) : (le.updateQueue = null, le.memoizedState = null);
            }
            var Oe = Zv(_);
            if (Oe !== null) {
              Oe.flags &= -257, ju(Oe, _, R, d, r), Oe.mode & 1 && Vd(d, I, r), r = Oe, D = I;
              var Pe = r.updateQueue;
              if (Pe === null) {
                var Ie = /* @__PURE__ */ new Set();
                Ie.add(D), r.updateQueue = Ie;
              } else Pe.add(D);
              break e;
            } else {
              if ((r & 1) === 0) {
                Vd(d, I, r), Jd();
                break e;
              }
              D = Error(m(426));
            }
          } else if (dn && R.mode & 1) {
            var kn = Zv(_);
            if (kn !== null) {
              (kn.flags & 65536) === 0 && (kn.flags |= 256), ju(kn, _, R, d, r), Xi(Dl(D, R));
              break e;
            }
          }
          d = D = Dl(D, R), xn !== 4 && (xn = 2), Fs === null ? Fs = [d] : Fs.push(d), d = _;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var j = Xv(d, D, r);
                Wv(d, j);
                break e;
              case 1:
                R = D;
                var M = d.type, V = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof M.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && (Pu === null || !Pu.has(V)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var oe = Pd(d, R, r);
                  Wv(d, oe);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        hh(u);
      } catch (Ve) {
        r = Ve, Fn === u && u !== null && (Fn = u = u.return);
        continue;
      }
      break;
    } while (!0);
  }
  function dh() {
    var n = Fu.current;
    return Fu.current = kl, n === null ? kl : n;
  }
  function Jd() {
    (xn === 0 || xn === 3 || xn === 2) && (xn = 4), Qn === null || (Li & 268435455) === 0 && (wo & 268435455) === 0 || li(Qn, cr);
  }
  function pf(n, r) {
    var u = Lt;
    Lt |= 2;
    var o = dh();
    (Qn !== n || cr !== r) && (Sa = null, nu(n, r));
    do
      try {
        My();
        break;
      } catch (c) {
        fh(n, c);
      }
    while (!0);
    if (bd(), Lt = u, Fu.current = o, Fn !== null) throw Error(m(261));
    return Qn = null, cr = 0, xn;
  }
  function My() {
    for (; Fn !== null; ) vh(Fn);
  }
  function ph() {
    for (; Fn !== null && !Ka(); ) vh(Fn);
  }
  function vh(n) {
    var r = Sh(n.alternate, n, ga);
    n.memoizedProps = n.pendingProps, r === null ? hh(n) : Fn = r, Ll.current = null;
  }
  function hh(n) {
    var r = n;
    do {
      var u = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (u = ih(u, r, ga), u !== null) {
          Fn = u;
          return;
        }
      } else {
        if (u = lf(u, r), u !== null) {
          u.flags &= 32767, Fn = u;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          xn = 6, Fn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Fn = r;
        return;
      }
      Fn = r = n;
    } while (r !== null);
    xn === 0 && (xn = 5);
  }
  function Ul(n, r, u) {
    var o = jt, c = sr.transition;
    try {
      sr.transition = null, jt = 1, Ny(n, r, u, o);
    } finally {
      sr.transition = c, jt = o;
    }
    return null;
  }
  function Ny(n, r, u, o) {
    do
      Do();
    while (tu !== null);
    if ((Lt & 6) !== 0) throw Error(m(327));
    u = n.finishedWork;
    var c = n.finishedLanes;
    if (u === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, u === n.current) throw Error(m(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = u.lanes | u.childLanes;
    if (ed(n, d), n === Qn && (Fn = Qn = null, cr = 0), (u.subtreeFlags & 2064) === 0 && (u.flags & 2064) === 0 || ff || (ff = !0, _h(il, function() {
      return Do(), null;
    })), d = (u.flags & 15990) !== 0, (u.subtreeFlags & 15990) !== 0 || d) {
      d = sr.transition, sr.transition = null;
      var _ = jt;
      jt = 1;
      var R = Lt;
      Lt |= 4, Ll.current = null, lh(n, u), Wd(u, n), so(hl), ka = !!os, hl = os = null, n.current = u, Dy(u), qa(), Lt = R, jt = _, sr.transition = d;
    } else n.current = u;
    if (ff && (ff = !1, tu = n, Ps = c), d = n.pendingLanes, d === 0 && (Pu = null), Go(u.stateNode), aa(n, St()), r !== null) for (o = n.onRecoverableError, u = 0; u < r.length; u++) c = r[u], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (xo) throw xo = !1, n = Ml, Ml = null, n;
    return (Ps & 1) !== 0 && n.tag !== 0 && Do(), d = n.pendingLanes, (d & 1) !== 0 ? n === ko ? Vu++ : (Vu = 0, ko = n) : Vu = 0, Ti(), null;
  }
  function Do() {
    if (tu !== null) {
      var n = to(Ps), r = sr.transition, u = jt;
      try {
        if (sr.transition = null, jt = 16 > n ? 16 : n, tu === null) var o = !1;
        else {
          if (n = tu, tu = null, Ps = 0, (Lt & 6) !== 0) throw Error(m(331));
          var c = Lt;
          for (Lt |= 4, Ue = n.current; Ue !== null; ) {
            var d = Ue, _ = d.child;
            if ((Ue.flags & 16) !== 0) {
              var R = d.deletions;
              if (R !== null) {
                for (var D = 0; D < R.length; D++) {
                  var I = R[D];
                  for (Ue = I; Ue !== null; ) {
                    var le = Ue;
                    switch (le.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ns(8, le, d);
                    }
                    var se = le.child;
                    if (se !== null) se.return = le, Ue = se;
                    else for (; Ue !== null; ) {
                      le = Ue;
                      var ue = le.sibling, Oe = le.return;
                      if (sf(le), le === I) {
                        Ue = null;
                        break;
                      }
                      if (ue !== null) {
                        ue.return = Oe, Ue = ue;
                        break;
                      }
                      Ue = Oe;
                    }
                  }
                }
                var Pe = d.alternate;
                if (Pe !== null) {
                  var Ie = Pe.child;
                  if (Ie !== null) {
                    Pe.child = null;
                    do {
                      var kn = Ie.sibling;
                      Ie.sibling = null, Ie = kn;
                    } while (Ie !== null);
                  }
                }
                Ue = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && _ !== null) _.return = d, Ue = _;
            else e: for (; Ue !== null; ) {
              if (d = Ue, (d.flags & 2048) !== 0) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Ns(9, d, d.return);
              }
              var j = d.sibling;
              if (j !== null) {
                j.return = d.return, Ue = j;
                break e;
              }
              Ue = d.return;
            }
          }
          var M = n.current;
          for (Ue = M; Ue !== null; ) {
            _ = Ue;
            var V = _.child;
            if ((_.subtreeFlags & 2064) !== 0 && V !== null) V.return = _, Ue = V;
            else e: for (_ = M; Ue !== null; ) {
              if (R = Ue, (R.flags & 2048) !== 0) try {
                switch (R.tag) {
                  case 0:
                  case 11:
                  case 15:
                    As(9, R);
                }
              } catch (Ve) {
                pn(R, R.return, Ve);
              }
              if (R === _) {
                Ue = null;
                break e;
              }
              var oe = R.sibling;
              if (oe !== null) {
                oe.return = R.return, Ue = oe;
                break e;
              }
              Ue = R.return;
            }
          }
          if (Lt = c, Ti(), Qr && typeof Qr.onPostCommitFiberRoot == "function") try {
            Qr.onPostCommitFiberRoot(gu, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        jt = u, sr.transition = r;
      }
    }
    return !1;
  }
  function mh(n, r, u) {
    r = Dl(u, r), r = Xv(n, r, 1), n = Au(n, r, 1), r = Pn(), n !== null && (Bi(n, 1, r), aa(n, r));
  }
  function pn(n, r, u) {
    if (n.tag === 3) mh(n, n, u);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        mh(r, n, u);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Pu === null || !Pu.has(o))) {
          n = Dl(u, n), n = Pd(r, n, 1), r = Au(r, n, 1), n = Pn(), r !== null && (Bi(r, 1, n), aa(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Ay(n, r, u) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Pn(), n.pingedLanes |= n.suspendedLanes & u, Qn === n && (cr & u) === u && (xn === 4 || xn === 3 && (cr & 130023424) === cr && 500 > St() - Kd ? nu(n, 0) : cf |= u), aa(n, r);
  }
  function yh(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = pa, pa <<= 1, (pa & 130023424) === 0 && (pa = 4194304)));
    var u = Pn();
    n = ma(n, r), n !== null && (Bi(n, r, u), aa(n, u));
  }
  function Uy(n) {
    var r = n.memoizedState, u = 0;
    r !== null && (u = r.retryLane), yh(n, u);
  }
  function gh(n, r) {
    var u = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (u = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    o !== null && o.delete(r), yh(n, u);
  }
  var Sh;
  Sh = function(n, r, u) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Yn.current) zn = !0;
    else {
      if ((n.lanes & u) === 0 && (r.flags & 128) === 0) return zn = !1, Os(n, r, u);
      zn = (n.flags & 131072) !== 0;
    }
    else zn = !1, dn && (r.flags & 1048576) !== 0 && Bv(r, qi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ua(n, r), n = r.pendingProps;
        var c = qr(r, _n.current);
        yn(r, u), c = Uu(null, r, o, n, c, u);
        var d = ai();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Nn(o) ? (d = !0, Zn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Ld(r), c.updater = tf, r.stateNode = c, c._reactInternals = r, ws(r, o, n, u), r = ks(null, r, o, !0, d, u)) : (r.tag = 0, dn && d && Lc(r), or(null, r, c, u), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ua(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = jy(o), n = ii(o, n), c) {
            case 0:
              r = Jv(null, r, o, n, u);
              break e;
            case 1:
              r = eh(null, r, o, n, u);
              break e;
            case 11:
              r = ta(null, r, o, n, u);
              break e;
            case 14:
              r = Ol(null, r, o, ii(o.type, n), u);
              break e;
          }
          throw Error(m(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ii(o, c), Jv(n, r, o, c, u);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ii(o, c), eh(n, r, o, c, u);
      case 3:
        e: {
          if (Co(r), n === null) throw Error(m(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Yv(n, r), ps(r, o, null, u);
          var _ = r.memoizedState;
          if (o = _.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: _.cache, pendingSuspenseBoundaries: _.pendingSuspenseBoundaries, transitions: _.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Dl(Error(m(423)), r), r = th(n, r, o, u, c);
            break e;
          } else if (o !== c) {
            c = Dl(Error(m(424)), r), r = th(n, r, o, u, c);
            break e;
          } else for (Zr = Ei(r.stateNode.containerInfo.firstChild), Xr = r, dn = !0, Na = null, u = Te(r, null, o, u), r.child = u; u; ) u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Nu(), o === c) {
              r = za(n, r, u);
              break e;
            }
            or(n, r, o, u);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Qv(r), n === null && Td(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, _ = c.children, bc(o, c) ? _ = null : d !== null && bc(o, d) && (r.flags |= 32), Hd(n, r), or(n, r, _, u), r.child;
      case 6:
        return n === null && Td(r), null;
      case 13:
        return uf(n, r, u);
      case 4:
        return Nd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Tn(r, null, o, u) : or(n, r, o, u), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ii(o, c), ta(n, r, o, c, u);
      case 7:
        return or(n, r, r.pendingProps, u), r.child;
      case 8:
        return or(n, r, r.pendingProps.children, u), r.child;
      case 12:
        return or(n, r, r.pendingProps.children, u), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, _ = c.value, Qe(ha, o._currentValue), o._currentValue = _, d !== null) if (ni(d.value, _)) {
            if (d.children === c.children && !Yn.current) {
              r = za(n, r, u);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var R = d.dependencies;
            if (R !== null) {
              _ = d.child;
              for (var D = R.firstContext; D !== null; ) {
                if (D.context === o) {
                  if (d.tag === 1) {
                    D = Zi(-1, u & -u), D.tag = 2;
                    var I = d.updateQueue;
                    if (I !== null) {
                      I = I.shared;
                      var le = I.pending;
                      le === null ? D.next = D : (D.next = le.next, le.next = D), I.pending = D;
                    }
                  }
                  d.lanes |= u, D = d.alternate, D !== null && (D.lanes |= u), kd(
                    d.return,
                    u,
                    r
                  ), R.lanes |= u;
                  break;
                }
                D = D.next;
              }
            } else if (d.tag === 10) _ = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (_ = d.return, _ === null) throw Error(m(341));
              _.lanes |= u, R = _.alternate, R !== null && (R.lanes |= u), kd(_, u, r), _ = d.sibling;
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
          or(n, r, c.children, u), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, yn(r, u), c = Aa(c), o = o(c), r.flags |= 1, or(n, r, o, u), r.child;
      case 14:
        return o = r.type, c = ii(o, r.pendingProps), c = ii(o.type, c), Ol(n, r, o, c, u);
      case 15:
        return _t(n, r, r.type, r.pendingProps, u);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ii(o, c), Ua(n, r), r.tag = 1, Nn(o) ? (n = !0, Zn(r)) : n = !1, yn(r, u), nf(r, o, c), ws(r, o, c, u), ks(null, r, o, !0, n, u);
      case 19:
        return ki(n, r, u);
      case 22:
        return xs(n, r, u);
    }
    throw Error(m(156, r.tag));
  };
  function _h(n, r) {
    return sn(n, r);
  }
  function zy(n, r, u, o) {
    this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Fa(n, r, u, o) {
    return new zy(n, r, u, o);
  }
  function ep(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function jy(n) {
    if (typeof n == "function") return ep(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === K) return 11;
      if (n === je) return 14;
    }
    return 2;
  }
  function Hu(n, r) {
    var u = n.alternate;
    return u === null ? (u = Fa(n.tag, r, n.key, n.mode), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = r, u.type = n.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = n.flags & 14680064, u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, r = n.dependencies, u.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u;
  }
  function Bs(n, r, u, o, c, d) {
    var _ = 2;
    if (o = n, typeof n == "function") ep(n) && (_ = 1);
    else if (typeof n == "string") _ = 5;
    else e: switch (n) {
      case Be:
        return ru(u.children, c, d, r);
      case $e:
        _ = 8, c |= 8;
        break;
      case at:
        return n = Fa(12, u, r, c | 2), n.elementType = at, n.lanes = d, n;
      case ee:
        return n = Fa(13, u, r, c), n.elementType = ee, n.lanes = d, n;
      case Se:
        return n = Fa(19, u, r, c), n.elementType = Se, n.lanes = d, n;
      case me:
        return Bu(u, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case st:
            _ = 10;
            break e;
          case ct:
            _ = 9;
            break e;
          case K:
            _ = 11;
            break e;
          case je:
            _ = 14;
            break e;
          case Re:
            _ = 16, o = null;
            break e;
        }
        throw Error(m(130, n == null ? n : typeof n, ""));
    }
    return r = Fa(_, u, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function ru(n, r, u, o) {
    return n = Fa(7, n, o, r), n.lanes = u, n;
  }
  function Bu(n, r, u, o) {
    return n = Fa(22, n, o, r), n.elementType = me, n.lanes = u, n.stateNode = { isHidden: !1 }, n;
  }
  function tp(n, r, u) {
    return n = Fa(6, n, null, r), n.lanes = u, n;
  }
  function vf(n, r, u) {
    return r = Fa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = u, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Eh(n, r, u, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = eo(0), this.expirationTimes = eo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = eo(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function hf(n, r, u, o, c, d, _, R, D) {
    return n = new Eh(n, r, u, R, D), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Fa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ld(d), n;
  }
  function Fy(n, r, u) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: et, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: u };
  }
  function np(n) {
    if (!n) return Cr;
    n = n._reactInternals;
    e: {
      if (gt(n) !== n || n.tag !== 1) throw Error(m(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Nn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(m(171));
    }
    if (n.tag === 1) {
      var u = n.type;
      if (Nn(u)) return fs(n, u, r);
    }
    return r;
  }
  function Ch(n, r, u, o, c, d, _, R, D) {
    return n = hf(u, o, !0, n, c, d, _, R, D), n.context = np(null), u = n.current, o = Pn(), c = Mi(u), d = Zi(o, c), d.callback = r ?? null, Au(u, d, c), n.current.lanes = c, Bi(n, c, o), aa(n, o), n;
  }
  function mf(n, r, u, o) {
    var c = r.current, d = Pn(), _ = Mi(c);
    return u = np(u), r.context === null ? r.context = u : r.pendingContext = u, r = Zi(d, _), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Au(c, r, _), n !== null && (Ur(n, c, _, d), Uc(n, c, _)), _;
  }
  function yf(n) {
    return n = n.current, n.child ? (n.child.tag === 5, n.child.stateNode) : null;
  }
  function rp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var u = n.retryLane;
      n.retryLane = u !== 0 && u < r ? u : r;
    }
  }
  function gf(n, r) {
    rp(n, r), (n = n.alternate) && rp(n, r);
  }
  function Rh() {
    return null;
  }
  var zl = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function ap(n) {
    this._internalRoot = n;
  }
  Sf.prototype.render = ap.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(m(409));
    mf(n, r, null, null);
  }, Sf.prototype.unmount = ap.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Al(function() {
        mf(null, n, null, null);
      }), r[Gi] = null;
    }
  };
  function Sf(n) {
    this._internalRoot = n;
  }
  Sf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = pt();
      n = { blockedOn: null, target: n, priority: r };
      for (var u = 0; u < $n.length && r !== 0 && r < $n[u].priority; u++) ;
      $n.splice(u, 0, n), u === 0 && Xo(n);
    }
  };
  function ip(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function _f(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Th() {
  }
  function Py(n, r, u, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var I = yf(_);
          d.call(I);
        };
      }
      var _ = Ch(r, o, n, 0, null, !1, !1, "", Th);
      return n._reactRootContainer = _, n[Gi] = _.current, fo(n.nodeType === 8 ? n.parentNode : n), Al(), _;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var R = o;
      o = function() {
        var I = yf(D);
        R.call(I);
      };
    }
    var D = hf(n, 0, !1, null, null, !1, !1, "", Th);
    return n._reactRootContainer = D, n[Gi] = D.current, fo(n.nodeType === 8 ? n.parentNode : n), Al(function() {
      mf(r, D, u, o);
    }), D;
  }
  function Is(n, r, u, o, c) {
    var d = u._reactRootContainer;
    if (d) {
      var _ = d;
      if (typeof c == "function") {
        var R = c;
        c = function() {
          var D = yf(_);
          R.call(D);
        };
      }
      mf(r, _, n, c);
    } else _ = Py(u, r, n, c, o);
    return yf(_);
  }
  At = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var u = Za(r.pendingLanes);
          u !== 0 && (Ii(r, u | 1), aa(r, St()), (Lt & 6) === 0 && (bo = St() + 500, Ti()));
        }
        break;
      case 13:
        Al(function() {
          var o = ma(n, 1);
          if (o !== null) {
            var c = Pn();
            Ur(o, n, 1, c);
          }
        }), gf(n, 1);
    }
  }, Ko = function(n) {
    if (n.tag === 13) {
      var r = ma(n, 134217728);
      if (r !== null) {
        var u = Pn();
        Ur(r, n, 134217728, u);
      }
      gf(n, 134217728);
    }
  }, mi = function(n) {
    if (n.tag === 13) {
      var r = Mi(n), u = ma(n, r);
      if (u !== null) {
        var o = Pn();
        Ur(u, n, r, o);
      }
      gf(n, r);
    }
  }, pt = function() {
    return jt;
  }, no = function(n, r) {
    var u = jt;
    try {
      return jt = n, r();
    } finally {
      jt = u;
    }
  }, Gt = function(n, r, u) {
    switch (r) {
      case "input":
        if (Wr(n, u), r = u.name, u.type === "radio" && r != null) {
          for (u = n; u.parentNode; ) u = u.parentNode;
          for (u = u.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < u.length; r++) {
            var o = u[r];
            if (o !== n && o.form === n.form) {
              var c = mn(o);
              if (!c) throw Error(m(90));
              br(o), Wr(o, c);
            }
          }
        }
        break;
      case "textarea":
        Wa(n, u);
        break;
      case "select":
        r = u.value, r != null && Cn(n, !!u.multiple, r, !1);
    }
  }, nl = Xd, hu = Al;
  var Vy = { usingClientEntryPoint: !1, Events: [Ke, ri, mn, Hi, tl, Xd] }, $s = { findFiberByHostInstance: ml, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, wh = { bundleType: $s.bundleType, version: $s.version, rendererPackageName: $s.rendererPackageName, rendererConfig: $s.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: De.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Rn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: $s.findFiberByHostInstance || Rh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Iu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Iu.isDisabled && Iu.supportsFiber) try {
      gu = Iu.inject(wh), Qr = Iu;
    } catch {
    }
  }
  return $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vy, $a.createPortal = function(n, r) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ip(r)) throw Error(m(200));
    return Fy(n, r, null, u);
  }, $a.createRoot = function(n, r) {
    if (!ip(n)) throw Error(m(299));
    var u = !1, o = "", c = zl;
    return r != null && (r.unstable_strictMode === !0 && (u = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = hf(n, 1, !1, null, null, u, !1, o, c), n[Gi] = r.current, fo(n.nodeType === 8 ? n.parentNode : n), new ap(r);
  }, $a.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(m(188)) : (n = Object.keys(n).join(","), Error(m(268, n)));
    return n = Rn(r), n = n === null ? null : n.stateNode, n;
  }, $a.flushSync = function(n) {
    return Al(n);
  }, $a.hydrate = function(n, r, u) {
    if (!_f(r)) throw Error(m(200));
    return Is(null, n, r, !0, u);
  }, $a.hydrateRoot = function(n, r, u) {
    if (!ip(n)) throw Error(m(405));
    var o = u != null && u.hydratedSources || null, c = !1, d = "", _ = zl;
    if (u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (d = u.identifierPrefix), u.onRecoverableError !== void 0 && (_ = u.onRecoverableError)), r = Ch(r, null, n, 1, u ?? null, c, !1, d, _), n[Gi] = r.current, fo(n), o) for (n = 0; n < o.length; n++) u = o[n], c = u._getVersion, c = c(u._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [u, c] : r.mutableSourceEagerHydrationData.push(
      u,
      c
    );
    return new Sf(r);
  }, $a.render = function(n, r, u) {
    if (!_f(r)) throw Error(m(200));
    return Is(null, n, r, !1, u);
  }, $a.unmountComponentAtNode = function(n) {
    if (!_f(n)) throw Error(m(40));
    return n._reactRootContainer ? (Al(function() {
      Is(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Gi] = null;
      });
    }), !0) : !1;
  }, $a.unstable_batchedUpdates = Xd, $a.unstable_renderSubtreeIntoContainer = function(n, r, u, o) {
    if (!_f(u)) throw Error(m(200));
    if (n == null || n._reactInternals === void 0) throw Error(m(38));
    return Is(n, r, u, !1, o);
  }, $a.version = "18.3.1-next-f1338f8080-20240426", $a;
}
var Ya = {};
var NR;
function mD() {
  return NR || (NR = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var y = sv(), S = XR(), m = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, w = !1;
    function U(e) {
      w = e;
    }
    function T(e) {
      if (!w) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        z("warn", e, a);
      }
    }
    function v(e) {
      if (!w) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        z("error", e, a);
      }
    }
    function z(e, t, a) {
      {
        var i = m.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var O = 0, k = 1, Y = 2, W = 3, J = 4, Z = 5, ve = 6, he = 7, Fe = 8, ot = 9, Me = 10, Ee = 11, De = 12, pe = 13, et = 14, Be = 15, $e = 16, at = 17, st = 18, ct = 19, K = 21, ee = 22, Se = 23, je = 24, Re = 25, me = !0, te = !1, be = !1, fe = !1, A = !1, G = !0, Ge = !0, Ne = !0, vt = !0, Xe = /* @__PURE__ */ new Set(), xe = {}, it = {};
    function ft(e, t) {
      Wt(e, t), Wt(e + "Capture", t);
    }
    function Wt(e, t) {
      xe[e] && v("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), xe[e] = t;
      {
        var a = e.toLowerCase();
        it[a] = e, e === "onDoubleClick" && (it.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Xe.add(t[i]);
    }
    var On = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", br = Object.prototype.hasOwnProperty;
    function En(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function rr(e) {
      try {
        return Hn(e), !1;
      } catch {
        return !0;
      }
    }
    function Hn(e) {
      return "" + e;
    }
    function Bn(e, t) {
      if (rr(e))
        return v("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), Hn(e);
    }
    function Wr(e) {
      if (rr(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", En(e)), Hn(e);
    }
    function fi(e, t) {
      if (rr(e))
        return v("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), Hn(e);
    }
    function ca(e, t) {
      if (rr(e))
        return v("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), Hn(e);
    }
    function qn(e) {
      if (rr(e))
        return v("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", En(e)), Hn(e);
    }
    function Cn(e) {
      if (rr(e))
        return v("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", En(e)), Hn(e);
    }
    var In = 0, Sr = 1, Wa = 2, Ln = 3, _r = 4, fa = 5, Qa = 6, di = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ye = di + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ye = new RegExp("^[" + di + "][" + ye + "]*$"), Ct = {}, It = {};
    function nn(e) {
      return br.call(It, e) ? !0 : br.call(Ct, e) ? !1 : Ye.test(e) ? (It[e] = !0, !0) : (Ct[e] = !0, v("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === In : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function on(e, t, a, i) {
      if (a !== null && a.type === In)
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
    function Xn(e, t, a, i) {
      if (t === null || typeof t > "u" || on(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Ln:
            return !t;
          case _r:
            return t === !1;
          case fa:
            return isNaN(t);
          case Qa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function rn(e) {
      return Gt.hasOwnProperty(e) ? Gt[e] : null;
    }
    function Qt(e, t, a, i, l, s, f) {
      this.acceptsBooleans = t === Wa || t === Ln || t === _r, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Gt = {}, da = [
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
    da.forEach(function(e) {
      Gt[e] = new Qt(
        e,
        In,
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
      Gt[t] = new Qt(
        t,
        Sr,
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
      Gt[e] = new Qt(
        e,
        Wa,
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
      Gt[e] = new Qt(
        e,
        Wa,
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
      Gt[e] = new Qt(
        e,
        Ln,
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
      Gt[e] = new Qt(
        e,
        Ln,
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
      Gt[e] = new Qt(
        e,
        _r,
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
      Gt[e] = new Qt(
        e,
        Qa,
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
      Gt[e] = new Qt(
        e,
        fa,
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
    var Er = /[\-\:]([a-z])/g, wa = function(e) {
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
      var t = e.replace(Er, wa);
      Gt[t] = new Qt(
        t,
        Sr,
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
      var t = e.replace(Er, wa);
      Gt[t] = new Qt(
        t,
        Sr,
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
      var t = e.replace(Er, wa);
      Gt[t] = new Qt(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Gt[e] = new Qt(
        e,
        Sr,
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
    var Hi = "xlinkHref";
    Gt[Hi] = new Qt(
      "xlinkHref",
      Sr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Gt[e] = new Qt(
        e,
        Sr,
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
    var tl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, nl = !1;
    function hu(e) {
      !nl && tl.test(e) && (nl = !0, v("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function mu(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Bn(a, t), i.sanitizeURL && hu("" + a);
        var s = i.attributeName, f = null;
        if (i.type === _r) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Xn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Xn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Ln)
            return a;
          f = e.getAttribute(s);
        }
        return Xn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function rl(e, t, a, i) {
      {
        if (!nn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Bn(a, t), l === "" + a ? a : l;
      }
    }
    function xr(e, t, a, i) {
      var l = rn(t);
      if (!vn(t, l, i)) {
        if (Xn(t, a, l, i) && (a = null), i || l === null) {
          if (nn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Bn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = l.mustUseProperty;
        if (f) {
          var p = l.propertyName;
          if (a === null) {
            var h = l.type;
            e[p] = h === Ln ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var E = l.attributeName, C = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(E);
        else {
          var N = l.type, L;
          N === Ln || N === _r && a === !0 ? L = "" : (Bn(a, E), L = "" + a, l.sanitizeURL && hu(L.toString())), C ? e.setAttributeNS(C, E, L) : e.setAttribute(E, L);
        }
      }
    }
    var kr = /* @__PURE__ */ Symbol.for("react.element"), ar = /* @__PURE__ */ Symbol.for("react.portal"), pi = /* @__PURE__ */ Symbol.for("react.fragment"), Ga = /* @__PURE__ */ Symbol.for("react.strict_mode"), vi = /* @__PURE__ */ Symbol.for("react.profiler"), hi = /* @__PURE__ */ Symbol.for("react.provider"), x = /* @__PURE__ */ Symbol.for("react.context"), re = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ce = /* @__PURE__ */ Symbol.for("react.suspense"), ze = /* @__PURE__ */ Symbol.for("react.suspense_list"), gt = /* @__PURE__ */ Symbol.for("react.memo"), ht = /* @__PURE__ */ Symbol.for("react.lazy"), bt = /* @__PURE__ */ Symbol.for("react.scope"), Tt = /* @__PURE__ */ Symbol.for("react.debug_trace_mode"), Rn = /* @__PURE__ */ Symbol.for("react.offscreen"), an = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), sn = /* @__PURE__ */ Symbol.for("react.cache"), ir = /* @__PURE__ */ Symbol.for("react.tracing_marker"), Ka = Symbol.iterator, qa = "@@iterator";
    function St(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ka && e[Ka] || e[qa];
      return typeof t == "function" ? t : null;
    }
    var Et = Object.assign, Xa = 0, al, il, yu, ql, gu, Qr, Go;
    function Dr() {
    }
    Dr.__reactDisabledLog = !0;
    function fc() {
      {
        if (Xa === 0) {
          al = console.log, il = console.info, yu = console.warn, ql = console.error, gu = console.group, Qr = console.groupCollapsed, Go = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Dr,
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
        Xa++;
      }
    }
    function dc() {
      {
        if (Xa--, Xa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Et({}, e, {
              value: al
            }),
            info: Et({}, e, {
              value: il
            }),
            warn: Et({}, e, {
              value: yu
            }),
            error: Et({}, e, {
              value: ql
            }),
            group: Et({}, e, {
              value: gu
            }),
            groupCollapsed: Et({}, e, {
              value: Qr
            }),
            groupEnd: Et({}, e, {
              value: Go
            })
          });
        }
        Xa < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xl = m.ReactCurrentDispatcher, Su;
    function pa(e, t, a) {
      {
        if (Su === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            Su = i && i[1] || "";
          }
        return `
` + Su + e;
      }
    }
    var Za = !1, Ja;
    {
      var Zl = typeof WeakMap == "function" ? WeakMap : Map;
      Ja = new Zl();
    }
    function ul(e, t) {
      if (!e || Za)
        return "";
      {
        var a = Ja.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Za = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Xl.current, Xl.current = null, fc();
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
            } catch ($) {
              i = $;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch ($) {
              i = $;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            i = $;
          }
          e();
        }
      } catch ($) {
        if ($ && i && typeof $.stack == "string") {
          for (var p = $.stack.split(`
`), h = i.stack.split(`
`), E = p.length - 1, C = h.length - 1; E >= 1 && C >= 0 && p[E] !== h[C]; )
            C--;
          for (; E >= 1 && C >= 0; E--, C--)
            if (p[E] !== h[C]) {
              if (E !== 1 || C !== 1)
                do
                  if (E--, C--, C < 0 || p[E] !== h[C]) {
                    var N = `
` + p[E].replace(" at new ", " at ");
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && Ja.set(e, N), N;
                  }
                while (E >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        Za = !1, Xl.current = s, dc(), Error.prepareStackTrace = l;
      }
      var L = e ? e.displayName || e.name : "", H = L ? pa(L) : "";
      return typeof e == "function" && Ja.set(e, H), H;
    }
    function _u(e, t, a) {
      return ul(e, !0);
    }
    function Jl(e, t, a) {
      return ul(e, !1);
    }
    function eo(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Bi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ul(e, eo(e));
      if (typeof e == "string")
        return pa(e);
      switch (e) {
        case Ce:
          return pa("Suspense");
        case ze:
          return pa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case re:
            return Jl(e.render);
          case gt:
            return Bi(e.type, t, a);
          case ht: {
            var i = e, l = i._payload, s = i._init;
            try {
              return Bi(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function ed(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Z:
          return pa(e.type);
        case $e:
          return pa("Lazy");
        case pe:
          return pa("Suspense");
        case ct:
          return pa("SuspenseList");
        case O:
        case Y:
        case Be:
          return Jl(e.type);
        case Ee:
          return Jl(e.type.render);
        case k:
          return _u(e.type);
        default:
          return "";
      }
    }
    function Ii(e) {
      try {
        var t = "", a = e;
        do
          t += ed(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function jt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function to(e) {
      return e.displayName || "Context";
    }
    function At(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case pi:
          return "Fragment";
        case ar:
          return "Portal";
        case vi:
          return "Profiler";
        case Ga:
          return "StrictMode";
        case Ce:
          return "Suspense";
        case ze:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var t = e;
            return to(t) + ".Consumer";
          case hi:
            var a = e;
            return to(a._context) + ".Provider";
          case re:
            return jt(e, e.render, "ForwardRef");
          case gt:
            var i = e.displayName || null;
            return i !== null ? i : At(e.type) || "Memo";
          case ht: {
            var l = e, s = l._payload, f = l._init;
            try {
              return At(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Ko(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function mi(e) {
      return e.displayName || "Context";
    }
    function pt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case je:
          return "Cache";
        case ot:
          var i = a;
          return mi(i) + ".Consumer";
        case Me:
          var l = a;
          return mi(l._context) + ".Provider";
        case st:
          return "DehydratedFragment";
        case Ee:
          return Ko(a, a.render, "ForwardRef");
        case he:
          return "Fragment";
        case Z:
          return a;
        case J:
          return "Portal";
        case W:
          return "Root";
        case ve:
          return "Text";
        case $e:
          return At(a);
        case Fe:
          return a === Ga ? "StrictMode" : "Mode";
        case ee:
          return "Offscreen";
        case De:
          return "Profiler";
        case K:
          return "Scope";
        case pe:
          return "Suspense";
        case ct:
          return "SuspenseList";
        case Re:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case k:
        case O:
        case at:
        case Y:
        case et:
        case Be:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var no = m.ReactDebugCurrentFrame, ur = null, yi = !1;
    function Or() {
      {
        if (ur === null)
          return null;
        var e = ur._debugOwner;
        if (e !== null && typeof e < "u")
          return pt(e);
      }
      return null;
    }
    function gi() {
      return ur === null ? "" : Ii(ur);
    }
    function cn() {
      no.getCurrentStack = null, ur = null, yi = !1;
    }
    function Kt(e) {
      no.getCurrentStack = e === null ? null : gi, ur = e, yi = !1;
    }
    function Eu() {
      return ur;
    }
    function $n(e) {
      yi = e;
    }
    function Lr(e) {
      return "" + e;
    }
    function ba(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Cn(e), e;
        default:
          return "";
      }
    }
    var ll = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function qo(e, t) {
      ll[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || v("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || v("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Xo(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Cu(e) {
      return e._valueTracker;
    }
    function ol(e) {
      e._valueTracker = null;
    }
    function td(e) {
      var t = "";
      return e && (Xo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function xa(e) {
      var t = Xo(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Cn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(p) {
            Cn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Cn(p), i = "" + p;
          },
          stopTracking: function() {
            ol(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ei(e) {
      Cu(e) || (e._valueTracker = xa(e));
    }
    function Si(e) {
      if (!e)
        return !1;
      var t = Cu(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = td(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ka(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var ro = !1, ao = !1, Ru = !1, sl = !1;
    function io(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function uo(e, t) {
      var a = e, i = t.checked, l = Et({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function ti(e, t) {
      qo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ao && (v("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), ao = !0), t.value !== void 0 && t.defaultValue !== void 0 && !ro && (v("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), ro = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ba(t.value != null ? t.value : i),
        controlled: io(t)
      };
    }
    function g(e, t) {
      var a = e, i = t.checked;
      i != null && xr(a, "checked", i, !1);
    }
    function b(e, t) {
      var a = e;
      {
        var i = io(t);
        !a._wrapperState.controlled && i && !sl && (v("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), sl = !0), a._wrapperState.controlled && !i && !Ru && (v("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ru = !0);
      }
      g(e, t);
      var l = ba(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Lr(l)) : a.value !== Lr(l) && (a.value = Lr(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ze(a, t.type, l) : t.hasOwnProperty("defaultValue") && Ze(a, t.type, ba(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function B(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Lr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Q(e, t) {
      var a = e;
      b(a, t), de(a, t);
    }
    function de(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Bn(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var f = l[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Ih(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Si(f), b(f, p);
          }
        }
      }
    }
    function Ze(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ka(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Lr(e._wrapperState.initialValue) : e.defaultValue !== Lr(a) && (e.defaultValue = Lr(a)));
    }
    var _e = !1, nt = !1, xt = !1;
    function Ut(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? y.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || nt || (nt = !0, v("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (xt || (xt = !0, v("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !_e && (v("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), _e = !0);
    }
    function un(e, t) {
      t.value != null && e.setAttribute("value", Lr(ba(t.value)));
    }
    var qt = Array.isArray;
    function Rt(e) {
      return qt(e);
    }
    var Xt;
    Xt = !1;
    function hn() {
      var e = Or();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Tu = ["value", "defaultValue"];
    function Zo(e) {
      {
        qo("select", e);
        for (var t = 0; t < Tu.length; t++) {
          var a = Tu[t];
          if (e[a] != null) {
            var i = Rt(e[a]);
            e.multiple && !i ? v("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, hn()) : !e.multiple && i && v("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, hn());
          }
        }
      }
    }
    function $i(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var h = 0; h < l.length; h++) {
          var E = f.hasOwnProperty("$" + l[h].value);
          l[h].selected !== E && (l[h].selected = E), E && i && (l[h].defaultSelected = !0);
        }
      } else {
        for (var C = Lr(ba(a)), N = null, L = 0; L < l.length; L++) {
          if (l[L].value === C) {
            l[L].selected = !0, i && (l[L].defaultSelected = !0);
            return;
          }
          N === null && !l[L].disabled && (N = l[L]);
        }
        N !== null && (N.selected = !0);
      }
    }
    function Jo(e, t) {
      return Et({}, t, {
        value: void 0
      });
    }
    function cl(e, t) {
      var a = e;
      Zo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Xt && (v("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Xt = !0);
    }
    function nd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? $i(a, !!t.multiple, i, !1) : t.defaultValue != null && $i(a, !!t.multiple, t.defaultValue, !0);
    }
    function pc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? $i(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? $i(a, !!t.multiple, t.defaultValue, !0) : $i(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function rd(e, t) {
      var a = e, i = t.value;
      i != null && $i(a, !!t.multiple, i, !1);
    }
    var dv = !1;
    function ad(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Et({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Lr(a._wrapperState.initialValue)
      });
      return i;
    }
    function id(e, t) {
      var a = e;
      qo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !dv && (v("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component"), dv = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          v("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Rt(l)) {
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
        initialValue: ba(i)
      };
    }
    function pv(e, t) {
      var a = e, i = ba(t.value), l = ba(t.defaultValue);
      if (i != null) {
        var s = Lr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Lr(l));
    }
    function vv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function hy(e, t) {
      pv(e, t);
    }
    var Yi = "http://www.w3.org/1999/xhtml", ud = "http://www.w3.org/1998/Math/MathML", ld = "http://www.w3.org/2000/svg";
    function od(e) {
      switch (e) {
        case "svg":
          return ld;
        case "math":
          return ud;
        default:
          return Yi;
      }
    }
    function sd(e, t) {
      return e == null || e === Yi ? od(t) : e === ld && t === "foreignObject" ? Yi : e;
    }
    var hv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, vc, mv = hv(function(e, t) {
      if (e.namespaceURI === ld && !("innerHTML" in e)) {
        vc = vc || document.createElement("div"), vc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = vc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Gr = 1, Wi = 3, Mn = 8, Qi = 9, cd = 11, lo = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Wi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, es = {
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
    }, ts = {
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
    function yv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var gv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ts).forEach(function(e) {
      gv.forEach(function(t) {
        ts[yv(t, e)] = ts[e];
      });
    });
    function hc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(ts.hasOwnProperty(e) && ts[e]) ? t + "px" : (ca(t, e), ("" + t).trim());
    }
    var Sv = /([A-Z])/g, _v = /^ms-/;
    function oo(e) {
      return e.replace(Sv, "-$1").toLowerCase().replace(_v, "-ms-");
    }
    var Ev = function() {
    };
    {
      var my = /^(?:webkit|moz|o)[A-Z]/, yy = /^-ms-/, Cv = /-(.)/g, fd = /;\s*$/, _i = {}, fl = {}, Rv = !1, ns = !1, gy = function(e) {
        return e.replace(Cv, function(t, a) {
          return a.toUpperCase();
        });
      }, Tv = function(e) {
        _i.hasOwnProperty(e) && _i[e] || (_i[e] = !0, v(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          gy(e.replace(yy, "ms-"))
        ));
      }, dd = function(e) {
        _i.hasOwnProperty(e) && _i[e] || (_i[e] = !0, v("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, pd = function(e, t) {
        fl.hasOwnProperty(t) && fl[t] || (fl[t] = !0, v(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(fd, "")));
      }, wv = function(e, t) {
        Rv || (Rv = !0, v("`NaN` is an invalid value for the `%s` css style property.", e));
      }, bv = function(e, t) {
        ns || (ns = !0, v("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Ev = function(e, t) {
        e.indexOf("-") > -1 ? Tv(e) : my.test(e) ? dd(e) : fd.test(t) && pd(e, t), typeof t == "number" && (isNaN(t) ? wv(e, t) : isFinite(t) || bv(e, t));
      };
    }
    var xv = Ev;
    function Sy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : oo(i)) + ":", t += hc(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function kv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || xv(i, t[i]);
          var s = hc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function _y(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Dv(e) {
      var t = {};
      for (var a in e)
        for (var i = es[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function Ey(e, t) {
      {
        if (!t)
          return;
        var a = Dv(e), i = Dv(t), l = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var h = f + "," + p;
            if (l[h])
              continue;
            l[h] = !0, v("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", _y(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ni = {
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
    }, rs = Et({
      menuitem: !0
    }, ni), Ov = "__html";
    function mc(e, t) {
      if (t) {
        if (rs[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Ov in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && v("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function wu(e, t) {
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
    var as = {
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
    }, yc = {
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
    }, so = {}, Cy = new RegExp("^(aria)-[" + ye + "]*$"), co = new RegExp("^(aria)[A-Z][" + ye + "]*$");
    function vd(e, t) {
      {
        if (br.call(so, t) && so[t])
          return !0;
        if (co.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = yc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return v("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), so[t] = !0, !0;
          if (t !== i)
            return v("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), so[t] = !0, !0;
        }
        if (Cy.test(t)) {
          var l = t.toLowerCase(), s = yc.hasOwnProperty(l) ? l : null;
          if (s == null)
            return so[t] = !0, !1;
          if (t !== s)
            return v("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), so[t] = !0, !0;
        }
      }
      return !0;
    }
    function is(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = vd(e, i);
          l || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? v("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && v("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function hd(e, t) {
      wu(e, t) || is(e, t);
    }
    var md = !1;
    function gc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !md && (md = !0, e === "select" && t.multiple ? v("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : v("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var dl = function() {
    };
    {
      var lr = {}, yd = /^on./, Sc = /^on[^A-Z]/, Lv = new RegExp("^(aria)-[" + ye + "]*$"), Mv = new RegExp("^(aria)[A-Z][" + ye + "]*$");
      dl = function(e, t, a, i) {
        if (br.call(lr, t) && lr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return v("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), lr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(l) ? f[l] : null;
          if (p != null)
            return v("Invalid event handler property `%s`. Did you mean `%s`?", t, p), lr[t] = !0, !0;
          if (yd.test(t))
            return v("Unknown event handler property `%s`. It will be ignored.", t), lr[t] = !0, !0;
        } else if (yd.test(t))
          return Sc.test(t) && v("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), lr[t] = !0, !0;
        if (Lv.test(t) || Mv.test(t))
          return !0;
        if (l === "innerhtml")
          return v("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), lr[t] = !0, !0;
        if (l === "aria")
          return v("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), lr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return v("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), lr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return v("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), lr[t] = !0, !0;
        var h = rn(t), E = h !== null && h.type === In;
        if (as.hasOwnProperty(l)) {
          var C = as[l];
          if (C !== t)
            return v("Invalid DOM property `%s`. Did you mean `%s`?", t, C), lr[t] = !0, !0;
        } else if (!E && t !== l)
          return v("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), lr[t] = !0, !0;
        return typeof a == "boolean" && on(t, a, h, !1) ? (a ? v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), lr[t] = !0, !0) : E ? !0 : on(t, a, h, !1) ? (lr[t] = !0, !1) : ((a === "false" || a === "true") && h !== null && h.type === Ln && (v("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), lr[t] = !0), !0);
      };
    }
    var Nv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = dl(e, l, t[l], a);
          s || i.push(l);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? v("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && v("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Av(e, t, a) {
      wu(e, t) || Nv(e, t, a);
    }
    var gd = 1, _c = 2, Da = 4, Sd = gd | _c | Da, pl = null;
    function Ry(e) {
      pl !== null && v("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), pl = e;
    }
    function Ty() {
      pl === null && v("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), pl = null;
    }
    function us(e) {
      return e === pl;
    }
    function _d(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Wi ? t.parentNode : t;
    }
    var Ec = null, vl = null, $t = null;
    function Cc(e) {
      var t = Mo(e);
      if (t) {
        if (typeof Ec != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Ih(a);
          Ec(t.stateNode, t.type, i);
        }
      }
    }
    function Rc(e) {
      Ec = e;
    }
    function fo(e) {
      vl ? $t ? $t.push(e) : $t = [e] : vl = e;
    }
    function Uv() {
      return vl !== null || $t !== null;
    }
    function Tc() {
      if (vl) {
        var e = vl, t = $t;
        if (vl = null, $t = null, Cc(e), t)
          for (var a = 0; a < t.length; a++)
            Cc(t[a]);
      }
    }
    var po = function(e, t) {
      return e(t);
    }, ls = function() {
    }, bu = !1;
    function zv() {
      var e = Uv();
      e && (ls(), Tc());
    }
    function jv(e, t, a) {
      if (bu)
        return e(t, a);
      bu = !0;
      try {
        return po(e, t, a);
      } finally {
        bu = !1, zv();
      }
    }
    function wy(e, t, a) {
      po = e, ls = a;
    }
    function Fv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function wc(e, t, a) {
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
          return !!(a.disabled && Fv(t));
        default:
          return !1;
      }
    }
    function xu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Ih(a);
      if (i === null)
        return null;
      var l = i[t];
      if (wc(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var os = !1;
    if (On)
      try {
        var hl = {};
        Object.defineProperty(hl, "passive", {
          get: function() {
            os = !0;
          }
        }), window.addEventListener("test", hl, hl), window.removeEventListener("test", hl, hl);
      } catch {
        os = !1;
      }
    function bc(e, t, a, i, l, s, f, p, h) {
      var E = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, E);
      } catch (C) {
        this.onError(C);
      }
    }
    var xc = bc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Ed = document.createElement("react");
      xc = function(t, a, i, l, s, f, p, h, E) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var C = document.createEvent("Event"), N = !1, L = !0, H = window.event, $ = Object.getOwnPropertyDescriptor(window, "event");
        function q() {
          Ed.removeEventListener(X, Je, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = H);
        }
        var we = Array.prototype.slice.call(arguments, 3);
        function Je() {
          N = !0, q(), a.apply(i, we), L = !1;
        }
        var We, Nt = !1, kt = !1;
        function F(P) {
          if (We = P.error, Nt = !0, We === null && P.colno === 0 && P.lineno === 0 && (kt = !0), P.defaultPrevented && We != null && typeof We == "object")
            try {
              We._suppressLogging = !0;
            } catch {
            }
        }
        var X = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", F), Ed.addEventListener(X, Je, !1), C.initEvent(X, !1, !1), Ed.dispatchEvent(C), $ && Object.defineProperty(window, "event", $), N && L && (Nt ? kt && (We = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : We = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(We)), window.removeEventListener("error", F), !N)
          return q(), bc.apply(this, arguments);
      };
    }
    var Pv = xc, vo = !1, kc = null, ho = !1, Ei = null, Vv = {
      onError: function(e) {
        vo = !0, kc = e;
      }
    };
    function ku(e, t, a, i, l, s, f, p, h) {
      vo = !1, kc = null, Pv.apply(Vv, arguments);
    }
    function Ci(e, t, a, i, l, s, f, p, h) {
      if (ku.apply(this, arguments), vo) {
        var E = cs();
        ho || (ho = !0, Ei = E);
      }
    }
    function ss() {
      if (ho) {
        var e = Ei;
        throw ho = !1, Ei = null, e;
      }
    }
    function Gi() {
      return vo;
    }
    function cs() {
      if (vo) {
        var e = kc;
        return vo = !1, kc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function mo(e) {
      return e._reactInternals;
    }
    function by(e) {
      return e._reactInternals !== void 0;
    }
    function ml(e, t) {
      e._reactInternals = t;
    }
    var Ke = (
      /*                      */
      0
    ), ri = (
      /*                */
      1
    ), mn = (
      /*                    */
      2
    ), Ot = (
      /*                       */
      4
    ), Oa = (
      /*                */
      16
    ), La = (
      /*                 */
      32
    ), ln = (
      /*                     */
      64
    ), Qe = (
      /*                   */
      128
    ), Cr = (
      /*            */
      256
    ), _n = (
      /*                          */
      512
    ), Yn = (
      /*                     */
      1024
    ), Kr = (
      /*                      */
      2048
    ), qr = (
      /*                    */
      4096
    ), Nn = (
      /*                   */
      8192
    ), yo = (
      /*             */
      16384
    ), Hv = (
      /*               */
      32767
    ), fs = (
      /*                   */
      32768
    ), Zn = (
      /*                */
      65536
    ), Dc = (
      /* */
      131072
    ), Ri = (
      /*                       */
      1048576
    ), go = (
      /*                    */
      2097152
    ), Ki = (
      /*                 */
      4194304
    ), Oc = (
      /*                */
      8388608
    ), Du = (
      /*               */
      16777216
    ), Ti = (
      /*              */
      33554432
    ), Ou = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ot | Yn | 0
    ), Lu = mn | Ot | Oa | La | _n | qr | Nn, Mu = Ot | ln | _n | Nn, qi = Kr | Oa, An = Ki | Oc | go, Ma = m.ReactCurrentOwner;
    function va(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (mn | qr)) !== Ke && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === W ? a : null;
    }
    function wi(e) {
      if (e.tag === pe) {
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
    function bi(e) {
      return e.tag === W ? e.stateNode.containerInfo : null;
    }
    function yl(e) {
      return va(e) === e;
    }
    function Bv(e) {
      {
        var t = Ma.current;
        if (t !== null && t.tag === k) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || v("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", pt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = mo(e);
      return l ? va(l) === l : !1;
    }
    function Lc(e) {
      if (va(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Mc(e) {
      var t = e.alternate;
      if (!t) {
        var a = va(e);
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
          for (var h = s.child; h; ) {
            if (h === i)
              return Lc(s), e;
            if (h === l)
              return Lc(s), t;
            h = h.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = f;
        else {
          for (var E = !1, C = s.child; C; ) {
            if (C === i) {
              E = !0, i = s, l = f;
              break;
            }
            if (C === l) {
              E = !0, l = s, i = f;
              break;
            }
            C = C.sibling;
          }
          if (!E) {
            for (C = f.child; C; ) {
              if (C === i) {
                E = !0, i = f, l = s;
                break;
              }
              if (C === l) {
                E = !0, l = f, i = s;
                break;
              }
              C = C.sibling;
            }
            if (!E)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== W)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Xr(e) {
      var t = Mc(e);
      return t !== null ? Zr(t) : null;
    }
    function Zr(e) {
      if (e.tag === Z || e.tag === ve)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Zr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function dn(e) {
      var t = Mc(e);
      return t !== null ? Na(t) : null;
    }
    function Na(e) {
      if (e.tag === Z || e.tag === ve)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== J) {
          var a = Na(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Cd = S.unstable_scheduleCallback, Iv = S.unstable_cancelCallback, Rd = S.unstable_shouldYield, Td = S.unstable_requestPaint, Wn = S.unstable_now, Nc = S.unstable_getCurrentPriorityLevel, ds = S.unstable_ImmediatePriority, Nu = S.unstable_UserBlockingPriority, Xi = S.unstable_NormalPriority, xy = S.unstable_LowPriority, gl = S.unstable_IdlePriority, Ac = S.unstable_yieldValue, $v = S.unstable_setDisableYieldValue, Sl = null, Tn = null, Te = null, ha = !1, Jr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function So(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return v("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ge && (e = Et({}, e, {
          getLaneLabelMap: _l,
          injectProfilingHooks: Aa
        })), Sl = t.inject(e), Tn = t;
      } catch (a) {
        v("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function wd(e, t) {
      if (Tn && typeof Tn.onScheduleFiberRoot == "function")
        try {
          Tn.onScheduleFiberRoot(Sl, e, t);
        } catch (a) {
          ha || (ha = !0, v("React instrumentation encountered an error: %s", a));
        }
    }
    function bd(e, t) {
      if (Tn && typeof Tn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Qe) === Qe;
          if (Ne) {
            var i;
            switch (t) {
              case Mr:
                i = ds;
                break;
              case ki:
                i = Nu;
                break;
              case Ua:
                i = Xi;
                break;
              case za:
                i = gl;
                break;
              default:
                i = Xi;
                break;
            }
            Tn.onCommitFiberRoot(Sl, e, i, a);
          }
        } catch (l) {
          ha || (ha = !0, v("React instrumentation encountered an error: %s", l));
        }
    }
    function xd(e) {
      if (Tn && typeof Tn.onPostCommitFiberRoot == "function")
        try {
          Tn.onPostCommitFiberRoot(Sl, e);
        } catch (t) {
          ha || (ha = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function kd(e) {
      if (Tn && typeof Tn.onCommitFiberUnmount == "function")
        try {
          Tn.onCommitFiberUnmount(Sl, e);
        } catch (t) {
          ha || (ha = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function yn(e) {
      if (typeof Ac == "function" && ($v(e), U(e)), Tn && typeof Tn.setStrictMode == "function")
        try {
          Tn.setStrictMode(Sl, e);
        } catch (t) {
          ha || (ha = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function Aa(e) {
      Te = e;
    }
    function _l() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Rl; a++) {
          var i = Gv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Dd(e) {
      Te !== null && typeof Te.markCommitStarted == "function" && Te.markCommitStarted(e);
    }
    function Od() {
      Te !== null && typeof Te.markCommitStopped == "function" && Te.markCommitStopped();
    }
    function ma(e) {
      Te !== null && typeof Te.markComponentRenderStarted == "function" && Te.markComponentRenderStarted(e);
    }
    function ya() {
      Te !== null && typeof Te.markComponentRenderStopped == "function" && Te.markComponentRenderStopped();
    }
    function Ld(e) {
      Te !== null && typeof Te.markComponentPassiveEffectMountStarted == "function" && Te.markComponentPassiveEffectMountStarted(e);
    }
    function Yv() {
      Te !== null && typeof Te.markComponentPassiveEffectMountStopped == "function" && Te.markComponentPassiveEffectMountStopped();
    }
    function Zi(e) {
      Te !== null && typeof Te.markComponentPassiveEffectUnmountStarted == "function" && Te.markComponentPassiveEffectUnmountStarted(e);
    }
    function Au() {
      Te !== null && typeof Te.markComponentPassiveEffectUnmountStopped == "function" && Te.markComponentPassiveEffectUnmountStopped();
    }
    function Uc(e) {
      Te !== null && typeof Te.markComponentLayoutEffectMountStarted == "function" && Te.markComponentLayoutEffectMountStarted(e);
    }
    function Wv() {
      Te !== null && typeof Te.markComponentLayoutEffectMountStopped == "function" && Te.markComponentLayoutEffectMountStopped();
    }
    function ps(e) {
      Te !== null && typeof Te.markComponentLayoutEffectUnmountStarted == "function" && Te.markComponentLayoutEffectUnmountStarted(e);
    }
    function Md() {
      Te !== null && typeof Te.markComponentLayoutEffectUnmountStopped == "function" && Te.markComponentLayoutEffectUnmountStopped();
    }
    function vs(e, t, a) {
      Te !== null && typeof Te.markComponentErrored == "function" && Te.markComponentErrored(e, t, a);
    }
    function xi(e, t, a) {
      Te !== null && typeof Te.markComponentSuspended == "function" && Te.markComponentSuspended(e, t, a);
    }
    function hs(e) {
      Te !== null && typeof Te.markLayoutEffectsStarted == "function" && Te.markLayoutEffectsStarted(e);
    }
    function ms() {
      Te !== null && typeof Te.markLayoutEffectsStopped == "function" && Te.markLayoutEffectsStopped();
    }
    function El(e) {
      Te !== null && typeof Te.markPassiveEffectsStarted == "function" && Te.markPassiveEffectsStarted(e);
    }
    function Nd() {
      Te !== null && typeof Te.markPassiveEffectsStopped == "function" && Te.markPassiveEffectsStopped();
    }
    function Cl(e) {
      Te !== null && typeof Te.markRenderStarted == "function" && Te.markRenderStarted(e);
    }
    function Qv() {
      Te !== null && typeof Te.markRenderYielded == "function" && Te.markRenderYielded();
    }
    function zc() {
      Te !== null && typeof Te.markRenderStopped == "function" && Te.markRenderStopped();
    }
    function gn(e) {
      Te !== null && typeof Te.markRenderScheduled == "function" && Te.markRenderScheduled(e);
    }
    function jc(e, t) {
      Te !== null && typeof Te.markForceUpdateScheduled == "function" && Te.markForceUpdateScheduled(e, t);
    }
    function ys(e, t) {
      Te !== null && typeof Te.markStateUpdateScheduled == "function" && Te.markStateUpdateScheduled(e, t);
    }
    var qe = (
      /*                         */
      0
    ), wt = (
      /*                 */
      1
    ), Ft = (
      /*                    */
      2
    ), Zt = (
      /*               */
      8
    ), Pt = (
      /*              */
      16
    ), Un = Math.clz32 ? Math.clz32 : gs, Jn = Math.log, Fc = Math.LN2;
    function gs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Jn(t) / Fc | 0) | 0;
    }
    var Rl = 31, ae = (
      /*                        */
      0
    ), zt = (
      /*                          */
      0
    ), ut = (
      /*                        */
      1
    ), Uu = (
      /*    */
      2
    ), ai = (
      /*             */
      4
    ), Rr = (
      /*            */
      8
    ), wn = (
      /*                     */
      16
    ), Ji = (
      /*                */
      32
    ), zu = (
      /*                       */
      4194240
    ), Tl = (
      /*                        */
      64
    ), Pc = (
      /*                        */
      128
    ), Vc = (
      /*                        */
      256
    ), Hc = (
      /*                        */
      512
    ), Bc = (
      /*                        */
      1024
    ), Ic = (
      /*                        */
      2048
    ), $c = (
      /*                        */
      4096
    ), Yc = (
      /*                        */
      8192
    ), Wc = (
      /*                        */
      16384
    ), wl = (
      /*                       */
      32768
    ), Qc = (
      /*                       */
      65536
    ), _o = (
      /*                       */
      131072
    ), Eo = (
      /*                       */
      262144
    ), Gc = (
      /*                       */
      524288
    ), Ss = (
      /*                       */
      1048576
    ), Kc = (
      /*                       */
      2097152
    ), _s = (
      /*                            */
      130023424
    ), bl = (
      /*                             */
      4194304
    ), qc = (
      /*                             */
      8388608
    ), Es = (
      /*                             */
      16777216
    ), Xc = (
      /*                             */
      33554432
    ), Zc = (
      /*                             */
      67108864
    ), Ad = bl, Cs = (
      /*          */
      134217728
    ), Ud = (
      /*                          */
      268435455
    ), Rs = (
      /*               */
      268435456
    ), xl = (
      /*                        */
      536870912
    ), ea = (
      /*                   */
      1073741824
    );
    function Gv(e) {
      {
        if (e & ut)
          return "Sync";
        if (e & Uu)
          return "InputContinuousHydration";
        if (e & ai)
          return "InputContinuous";
        if (e & Rr)
          return "DefaultHydration";
        if (e & wn)
          return "Default";
        if (e & Ji)
          return "TransitionHydration";
        if (e & zu)
          return "Transition";
        if (e & _s)
          return "Retry";
        if (e & Cs)
          return "SelectiveHydration";
        if (e & Rs)
          return "IdleHydration";
        if (e & xl)
          return "Idle";
        if (e & ea)
          return "Offscreen";
      }
    }
    var tn = -1, kl = Tl, Jc = bl;
    function Ts(e) {
      switch (ju(e)) {
        case ut:
          return ut;
        case Uu:
          return Uu;
        case ai:
          return ai;
        case Rr:
          return Rr;
        case wn:
          return wn;
        case Ji:
          return Ji;
        case Tl:
        case Pc:
        case Vc:
        case Hc:
        case Bc:
        case Ic:
        case $c:
        case Yc:
        case Wc:
        case wl:
        case Qc:
        case _o:
        case Eo:
        case Gc:
        case Ss:
        case Kc:
          return e & zu;
        case bl:
        case qc:
        case Es:
        case Xc:
        case Zc:
          return e & _s;
        case Cs:
          return Cs;
        case Rs:
          return Rs;
        case xl:
          return xl;
        case ea:
          return ea;
        default:
          return v("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ef(e, t) {
      var a = e.pendingLanes;
      if (a === ae)
        return ae;
      var i = ae, l = e.suspendedLanes, s = e.pingedLanes, f = a & Ud;
      if (f !== ae) {
        var p = f & ~l;
        if (p !== ae)
          i = Ts(p);
        else {
          var h = f & s;
          h !== ae && (i = Ts(h));
        }
      } else {
        var E = a & ~l;
        E !== ae ? i = Ts(E) : s !== ae && (i = Ts(s));
      }
      if (i === ae)
        return ae;
      if (t !== ae && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === ae) {
        var C = ju(i), N = ju(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          C >= N || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          C === wn && (N & zu) !== ae
        )
          return t;
      }
      (i & ai) !== ae && (i |= a & wn);
      var L = e.entangledLanes;
      if (L !== ae)
        for (var H = e.entanglements, $ = i & L; $ > 0; ) {
          var q = zn($), we = 1 << q;
          i |= H[q], $ &= ~we;
        }
      return i;
    }
    function ii(e, t) {
      for (var a = e.eventTimes, i = tn; t > 0; ) {
        var l = zn(t), s = 1 << l, f = a[l];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function zd(e, t) {
      switch (e) {
        case ut:
        case Uu:
        case ai:
          return t + 250;
        case Rr:
        case wn:
        case Ji:
        case Tl:
        case Pc:
        case Vc:
        case Hc:
        case Bc:
        case Ic:
        case $c:
        case Yc:
        case Wc:
        case wl:
        case Qc:
        case _o:
        case Eo:
        case Gc:
        case Ss:
        case Kc:
          return t + 5e3;
        case bl:
        case qc:
        case Es:
        case Xc:
        case Zc:
          return tn;
        case Cs:
        case Rs:
        case xl:
        case ea:
          return tn;
        default:
          return v("Should have found matching lanes. This is a bug in React."), tn;
      }
    }
    function tf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = zn(f), h = 1 << p, E = s[p];
        E === tn ? ((h & i) === ae || (h & l) !== ae) && (s[p] = zd(h, t)) : E <= t && (e.expiredLanes |= h), f &= ~h;
      }
    }
    function Kv(e) {
      return Ts(e.pendingLanes);
    }
    function nf(e) {
      var t = e.pendingLanes & ~ea;
      return t !== ae ? t : t & ea ? ea : ae;
    }
    function qv(e) {
      return (e & ut) !== ae;
    }
    function ws(e) {
      return (e & Ud) !== ae;
    }
    function Dl(e) {
      return (e & _s) === e;
    }
    function jd(e) {
      var t = ut | ai | wn;
      return (e & t) === ae;
    }
    function Fd(e) {
      return (e & zu) === e;
    }
    function rf(e, t) {
      var a = Uu | ai | Rr | wn;
      return (t & a) !== ae;
    }
    function Xv(e, t) {
      return (t & e.expiredLanes) !== ae;
    }
    function Pd(e) {
      return (e & zu) !== ae;
    }
    function Vd() {
      var e = kl;
      return kl <<= 1, (kl & zu) === ae && (kl = Tl), e;
    }
    function Zv() {
      var e = Jc;
      return Jc <<= 1, (Jc & _s) === ae && (Jc = bl), e;
    }
    function ju(e) {
      return e & -e;
    }
    function bs(e) {
      return ju(e);
    }
    function zn(e) {
      return 31 - Un(e);
    }
    function or(e) {
      return zn(e);
    }
    function ta(e, t) {
      return (e & t) !== ae;
    }
    function Ol(e, t) {
      return (e & t) === t;
    }
    function _t(e, t) {
      return e | t;
    }
    function xs(e, t) {
      return e & ~t;
    }
    function Hd(e, t) {
      return e & t;
    }
    function Jv(e) {
      return e;
    }
    function eh(e, t) {
      return e !== zt && e < t ? e : t;
    }
    function ks(e) {
      for (var t = [], a = 0; a < Rl; a++)
        t.push(e);
      return t;
    }
    function Co(e, t, a) {
      e.pendingLanes |= t, t !== xl && (e.suspendedLanes = ae, e.pingedLanes = ae);
      var i = e.eventTimes, l = or(t);
      i[l] = a;
    }
    function th(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = zn(i), s = 1 << l;
        a[l] = tn, i &= ~s;
      }
    }
    function af(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Bd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ae, e.pingedLanes = ae, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = zn(f), h = 1 << p;
        i[p] = ae, l[p] = tn, s[p] = tn, f &= ~h;
      }
    }
    function uf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = zn(l), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~f;
      }
    }
    function Id(e, t) {
      var a = ju(t), i;
      switch (a) {
        case ai:
          i = Uu;
          break;
        case wn:
          i = Rr;
          break;
        case Tl:
        case Pc:
        case Vc:
        case Hc:
        case Bc:
        case Ic:
        case $c:
        case Yc:
        case Wc:
        case wl:
        case Qc:
        case _o:
        case Eo:
        case Gc:
        case Ss:
        case Kc:
        case bl:
        case qc:
        case Es:
        case Xc:
        case Zc:
          i = Ji;
          break;
        case xl:
          i = Rs;
          break;
        default:
          i = zt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== zt ? zt : i;
    }
    function Ds(e, t, a) {
      if (Jr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = or(a), s = 1 << l, f = i[l];
          f.add(t), a &= ~s;
        }
    }
    function nh(e, t) {
      if (Jr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = or(t), s = 1 << l, f = a[l];
          f.size > 0 && (f.forEach(function(p) {
            var h = p.alternate;
            (h === null || !i.has(h)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function $d(e, t) {
      return null;
    }
    var Mr = ut, ki = ai, Ua = wn, za = xl, Os = zt;
    function ja() {
      return Os;
    }
    function jn(e) {
      Os = e;
    }
    function rh(e, t) {
      var a = Os;
      try {
        return Os = e, t();
      } finally {
        Os = a;
      }
    }
    function ah(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ls(e, t) {
      return e > t ? e : t;
    }
    function er(e, t) {
      return e !== 0 && e < t;
    }
    function ih(e) {
      var t = ju(e);
      return er(Mr, t) ? er(ki, t) ? ws(t) ? Ua : za : ki : Mr;
    }
    function lf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ms;
    function Tr(e) {
      Ms = e;
    }
    function ky(e) {
      Ms(e);
    }
    var Ue;
    function Ro(e) {
      Ue = e;
    }
    var of;
    function uh(e) {
      of = e;
    }
    var lh;
    function Ns(e) {
      lh = e;
    }
    var As;
    function Yd(e) {
      As = e;
    }
    var sf = !1, Us = [], eu = null, Di = null, Oi = null, bn = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map(), Ar = [], oh = [
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
    function sh(e) {
      return oh.indexOf(e) > -1;
    }
    function ui(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function Wd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          eu = null;
          break;
        case "dragenter":
        case "dragleave":
          Di = null;
          break;
        case "mouseover":
        case "mouseout":
          Oi = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          bn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Nr.delete(i);
          break;
        }
      }
    }
    function na(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ui(t, a, i, l, s);
        if (t !== null) {
          var p = Mo(t);
          p !== null && Ue(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var h = e.targetContainers;
      return l !== null && h.indexOf(l) === -1 && h.push(l), e;
    }
    function Dy(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return eu = na(eu, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = l;
          return Di = na(Di, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = l;
          return Oi = na(Oi, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var h = l, E = h.pointerId;
          return bn.set(E, na(bn.get(E) || null, e, t, a, i, h)), !0;
        }
        case "gotpointercapture": {
          var C = l, N = C.pointerId;
          return Nr.set(N, na(Nr.get(N) || null, e, t, a, i, C)), !0;
        }
      }
      return !1;
    }
    function Qd(e) {
      var t = Qs(e.target);
      if (t !== null) {
        var a = va(t);
        if (a !== null) {
          var i = a.tag;
          if (i === pe) {
            var l = wi(a);
            if (l !== null) {
              e.blockedOn = l, As(e.priority, function() {
                of(a);
              });
              return;
            }
          } else if (i === W) {
            var s = a.stateNode;
            if (lf(s)) {
              e.blockedOn = bi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function ch(e) {
      for (var t = lh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Ar.length && er(t, Ar[i].priority); i++)
        ;
      Ar.splice(i, 0, a), i === 0 && Qd(a);
    }
    function zs(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = wo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          Ry(s), l.target.dispatchEvent(s), Ty();
        } else {
          var f = Mo(i);
          return f !== null && Ue(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Gd(e, t, a) {
      zs(e) && a.delete(t);
    }
    function Oy() {
      sf = !1, eu !== null && zs(eu) && (eu = null), Di !== null && zs(Di) && (Di = null), Oi !== null && zs(Oi) && (Oi = null), bn.forEach(Gd), Nr.forEach(Gd);
    }
    function Fu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, sf || (sf = !0, S.unstable_scheduleCallback(S.unstable_NormalPriority, Oy)));
    }
    function Ll(e) {
      if (Us.length > 0) {
        Fu(Us[0], e);
        for (var t = 1; t < Us.length; t++) {
          var a = Us[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      eu !== null && Fu(eu, e), Di !== null && Fu(Di, e), Oi !== null && Fu(Oi, e);
      var i = function(p) {
        return Fu(p, e);
      };
      bn.forEach(i), Nr.forEach(i);
      for (var l = 0; l < Ar.length; l++) {
        var s = Ar[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ar.length > 0; ) {
        var f = Ar[0];
        if (f.blockedOn !== null)
          break;
        Qd(f), f.blockedOn === null && Ar.shift();
      }
    }
    var sr = m.ReactCurrentBatchConfig, Lt = !0;
    function Qn(e) {
      Lt = !!e;
    }
    function Fn() {
      return Lt;
    }
    function cr(e, t, a) {
      var i = cf(t), l;
      switch (i) {
        case Mr:
          l = ga;
          break;
        case ki:
          l = To;
          break;
        case Ua:
        default:
          l = xn;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function ga(e, t, a, i) {
      var l = ja(), s = sr.transition;
      sr.transition = null;
      try {
        jn(Mr), xn(e, t, a, i);
      } finally {
        jn(l), sr.transition = s;
      }
    }
    function To(e, t, a, i) {
      var l = ja(), s = sr.transition;
      sr.transition = null;
      try {
        jn(ki), xn(e, t, a, i);
      } finally {
        jn(l), sr.transition = s;
      }
    }
    function xn(e, t, a, i) {
      Lt && js(e, t, a, i);
    }
    function js(e, t, a, i) {
      var l = wo(e, t, a, i);
      if (l === null) {
        Qy(e, t, i, Li, a), Wd(e, i);
        return;
      }
      if (Dy(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Wd(e, i), t & Da && sh(e)) {
        for (; l !== null; ) {
          var s = Mo(l);
          s !== null && ky(s);
          var f = wo(e, t, a, i);
          if (f === null && Qy(e, t, i, Li, a), f === l)
            break;
          l = f;
        }
        l !== null && i.stopPropagation();
        return;
      }
      Qy(e, t, i, null, a);
    }
    var Li = null;
    function wo(e, t, a, i) {
      Li = null;
      var l = _d(i), s = Qs(l);
      if (s !== null) {
        var f = va(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === pe) {
            var h = wi(f);
            if (h !== null)
              return h;
            s = null;
          } else if (p === W) {
            var E = f.stateNode;
            if (lf(E))
              return bi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Li = s, null;
    }
    function cf(e) {
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
          return Mr;
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
          return ki;
        case "message": {
          var t = Nc();
          switch (t) {
            case ds:
              return Mr;
            case Nu:
              return ki;
            case Xi:
            case xy:
              return Ua;
            case gl:
              return za;
            default:
              return Ua;
          }
        }
        default:
          return Ua;
      }
    }
    function Fs(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ra(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Kd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function bo(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Sa = null, xo = null, Ml = null;
    function Pu(e) {
      return Sa = e, xo = Ps(), !0;
    }
    function ff() {
      Sa = null, xo = null, Ml = null;
    }
    function tu() {
      if (Ml)
        return Ml;
      var e, t = xo, a = t.length, i, l = Ps(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === l[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ml = l.slice(e, p), Ml;
    }
    function Ps() {
      return "value" in Sa ? Sa.value : Sa.textContent;
    }
    function Vu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ko() {
      return !0;
    }
    function Vs() {
      return !1;
    }
    function wr(e) {
      function t(a, i, l, s, f) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var h = e[p];
            h ? this[p] = h(s) : this[p] = s[p];
          }
        var E = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return E ? this.isDefaultPrevented = ko : this.isDefaultPrevented = Vs, this.isPropagationStopped = Vs, this;
      }
      return Et(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ko);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ko);
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
        isPersistent: ko
      }), t;
    }
    var Pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Mi = wr(Pn), Ur = Et({}, Pn, {
      view: 0,
      detail: 0
    }), aa = wr(Ur), df, Hs, Nl;
    function Ly(e) {
      e !== Nl && (Nl && e.type === "mousemove" ? (df = e.screenX - Nl.screenX, Hs = e.screenY - Nl.screenY) : (df = 0, Hs = 0), Nl = e);
    }
    var li = Et({}, Ur, {
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
      getModifierState: pn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ly(e), df);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Hs;
      }
    }), qd = wr(li), Xd = Et({}, li, {
      dataTransfer: 0
    }), Al = wr(Xd), Zd = Et({}, Ur, {
      relatedTarget: 0
    }), nu = wr(Zd), fh = Et({}, Pn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), dh = wr(fh), Jd = Et({}, Pn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), pf = wr(Jd), My = Et({}, Pn, {
      data: 0
    }), ph = wr(My), vh = ph, hh = {
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
    }, Ul = {
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
    function Ny(e) {
      if (e.key) {
        var t = hh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Vu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Ul[e.keyCode] || "Unidentified" : "";
    }
    var Do = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function mh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Do[e];
      return i ? !!a[i] : !1;
    }
    function pn(e) {
      return mh;
    }
    var Ay = Et({}, Ur, {
      key: Ny,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Vu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Vu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), yh = wr(Ay), Uy = Et({}, li, {
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
    }), gh = wr(Uy), Sh = Et({}, Ur, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pn
    }), _h = wr(Sh), zy = Et({}, Pn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Fa = wr(zy), ep = Et({}, li, {
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
    }), jy = wr(ep), Hu = [9, 13, 27, 32], Bs = 229, ru = On && "CompositionEvent" in window, Bu = null;
    On && "documentMode" in document && (Bu = document.documentMode);
    var tp = On && "TextEvent" in window && !Bu, vf = On && (!ru || Bu && Bu > 8 && Bu <= 11), Eh = 32, hf = String.fromCharCode(Eh);
    function Fy() {
      ft("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ft("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ft("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ft("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var np = !1;
    function Ch(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function mf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function yf(e, t) {
      return e === "keydown" && t.keyCode === Bs;
    }
    function rp(e, t) {
      switch (e) {
        case "keyup":
          return Hu.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Bs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function gf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Rh(e) {
      return e.locale === "ko";
    }
    var zl = !1;
    function ap(e, t, a, i, l) {
      var s, f;
      if (ru ? s = mf(t) : zl ? rp(t, i) && (s = "onCompositionEnd") : yf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      vf && !Rh(i) && (!zl && s === "onCompositionStart" ? zl = Pu(l) : s === "onCompositionEnd" && zl && (f = tu()));
      var p = Oh(a, s);
      if (p.length > 0) {
        var h = new ph(s, t, null, i, l);
        if (e.push({
          event: h,
          listeners: p
        }), f)
          h.data = f;
        else {
          var E = gf(i);
          E !== null && (h.data = E);
        }
      }
    }
    function Sf(e, t) {
      switch (e) {
        case "compositionend":
          return gf(t);
        case "keypress":
          var a = t.which;
          return a !== Eh ? null : (np = !0, hf);
        case "textInput":
          var i = t.data;
          return i === hf && np ? null : i;
        default:
          return null;
      }
    }
    function ip(e, t) {
      if (zl) {
        if (e === "compositionend" || !ru && rp(e, t)) {
          var a = tu();
          return ff(), zl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Ch(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return vf && !Rh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function _f(e, t, a, i, l) {
      var s;
      if (tp ? s = Sf(t, i) : s = ip(t, i), !s)
        return null;
      var f = Oh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new vh("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Th(e, t, a, i, l, s, f) {
      ap(e, t, a, i, l), _f(e, t, a, i, l);
    }
    var Py = {
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
    function Is(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Py[e.type] : t === "textarea";
    }
    function Vy(e) {
      if (!On)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function $s() {
      ft("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function wh(e, t, a, i) {
      fo(i);
      var l = Oh(t, "onChange");
      if (l.length > 0) {
        var s = new Mi("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var Iu = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function u(e) {
      var t = [];
      wh(t, n, e, _d(e)), jv(o, t);
    }
    function o(e) {
      eE(e, 0);
    }
    function c(e) {
      var t = bf(e);
      if (Si(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var _ = !1;
    On && (_ = Vy("input") && (!document.documentMode || document.documentMode > 9));
    function R(e, t) {
      Iu = e, n = t, Iu.attachEvent("onpropertychange", I);
    }
    function D() {
      Iu && (Iu.detachEvent("onpropertychange", I), Iu = null, n = null);
    }
    function I(e) {
      e.propertyName === "value" && c(n) && u(e);
    }
    function le(e, t, a) {
      e === "focusin" ? (D(), R(t, a)) : e === "focusout" && D();
    }
    function se(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function ue(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Oe(e, t) {
      if (e === "click")
        return c(t);
    }
    function Pe(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ie(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ze(e, "number", e.value);
    }
    function kn(e, t, a, i, l, s, f) {
      var p = a ? bf(a) : window, h, E;
      if (r(p) ? h = d : Is(p) ? _ ? h = Pe : (h = se, E = le) : ue(p) && (h = Oe), h) {
        var C = h(t, a);
        if (C) {
          wh(e, C, i, l);
          return;
        }
      }
      E && E(t, p, a), t === "focusout" && Ie(p);
    }
    function j() {
      Wt("onMouseEnter", ["mouseout", "mouseover"]), Wt("onMouseLeave", ["mouseout", "mouseover"]), Wt("onPointerEnter", ["pointerout", "pointerover"]), Wt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function M(e, t, a, i, l, s, f) {
      var p = t === "mouseover" || t === "pointerover", h = t === "mouseout" || t === "pointerout";
      if (p && !us(i)) {
        var E = i.relatedTarget || i.fromElement;
        if (E && (Qs(E) || Sp(E)))
          return;
      }
      if (!(!h && !p)) {
        var C;
        if (l.window === l)
          C = l;
        else {
          var N = l.ownerDocument;
          N ? C = N.defaultView || N.parentWindow : C = window;
        }
        var L, H;
        if (h) {
          var $ = i.relatedTarget || i.toElement;
          if (L = a, H = $ ? Qs($) : null, H !== null) {
            var q = va(H);
            (H !== q || H.tag !== Z && H.tag !== ve) && (H = null);
          }
        } else
          L = null, H = a;
        if (L !== H) {
          var we = qd, Je = "onMouseLeave", We = "onMouseEnter", Nt = "mouse";
          (t === "pointerout" || t === "pointerover") && (we = gh, Je = "onPointerLeave", We = "onPointerEnter", Nt = "pointer");
          var kt = L == null ? C : bf(L), F = H == null ? C : bf(H), X = new we(Je, Nt + "leave", L, i, l);
          X.target = kt, X.relatedTarget = F;
          var P = null, ce = Qs(l);
          if (ce === a) {
            var Ae = new we(We, Nt + "enter", H, i, l);
            Ae.target = F, Ae.relatedTarget = kt, P = Ae;
          }
          kT(e, X, P, L, H);
        }
      }
    }
    function V(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var oe = typeof Object.is == "function" ? Object.is : V;
    function Ve(e, t) {
      if (oe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!br.call(t, s) || !oe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function tt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function rt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function dt(e, t) {
      for (var a = tt(e), i = 0, l = 0; a; ) {
        if (a.nodeType === Wi) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = tt(rt(a));
      }
    }
    function tr(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        l.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Vt(e, l, s, f, p);
    }
    function Vt(e, t, a, i, l) {
      var s = 0, f = -1, p = -1, h = 0, E = 0, C = e, N = null;
      e: for (; ; ) {
        for (var L = null; C === t && (a === 0 || C.nodeType === Wi) && (f = s + a), C === i && (l === 0 || C.nodeType === Wi) && (p = s + l), C.nodeType === Wi && (s += C.nodeValue.length), (L = C.firstChild) !== null; )
          N = C, C = L;
        for (; ; ) {
          if (C === e)
            break e;
          if (N === t && ++h === a && (f = s), N === i && ++E === l && (p = s), (L = C.nextSibling) !== null)
            break;
          C = N, N = C.parentNode;
        }
        C = L;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function $u(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!l.extend && f > p) {
          var h = p;
          p = f, f = h;
        }
        var E = dt(e, f), C = dt(e, p);
        if (E && C) {
          if (l.rangeCount === 1 && l.anchorNode === E.node && l.anchorOffset === E.offset && l.focusNode === C.node && l.focusOffset === C.offset)
            return;
          var N = a.createRange();
          N.setStart(E.node, E.offset), l.removeAllRanges(), f > p ? (l.addRange(N), l.extend(C.node, C.offset)) : (N.setEnd(C.node, C.offset), l.addRange(N));
        }
      }
    }
    function bh(e) {
      return e && e.nodeType === Wi;
    }
    function I_(e, t) {
      return !e || !t ? !1 : e === t ? !0 : bh(e) ? !1 : bh(t) ? I_(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function cT(e) {
      return e && e.ownerDocument && I_(e.ownerDocument.documentElement, e);
    }
    function fT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function $_() {
      for (var e = window, t = ka(); t instanceof e.HTMLIFrameElement; ) {
        if (fT(t))
          e = t.contentWindow;
        else
          return t;
        t = ka(e.document);
      }
      return t;
    }
    function Hy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function dT() {
      var e = $_();
      return {
        focusedElem: e,
        selectionRange: Hy(e) ? vT(e) : null
      };
    }
    function pT(e) {
      var t = $_(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && cT(a)) {
        i !== null && Hy(a) && hT(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === Gr && l.push({
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
    function vT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = tr(e), t || {
        start: 0,
        end: 0
      };
    }
    function hT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : $u(e, t);
    }
    var mT = On && "documentMode" in document && document.documentMode <= 11;
    function yT() {
      ft("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Ef = null, By = null, up = null, Iy = !1;
    function gT(e) {
      if ("selectionStart" in e && Hy(e))
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
    function ST(e) {
      return e.window === e ? e.document : e.nodeType === Qi ? e : e.ownerDocument;
    }
    function Y_(e, t, a) {
      var i = ST(a);
      if (!(Iy || Ef == null || Ef !== ka(i))) {
        var l = gT(Ef);
        if (!up || !Ve(up, l)) {
          up = l;
          var s = Oh(By, "onSelect");
          if (s.length > 0) {
            var f = new Mi("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Ef;
          }
        }
      }
    }
    function _T(e, t, a, i, l, s, f) {
      var p = a ? bf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Is(p) || p.contentEditable === "true") && (Ef = p, By = a, up = null);
          break;
        case "focusout":
          Ef = null, By = null, up = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Iy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Iy = !1, Y_(e, i, l);
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
          if (mT)
            break;
        // falls through
        case "keydown":
        case "keyup":
          Y_(e, i, l);
      }
    }
    function xh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Cf = {
      animationend: xh("Animation", "AnimationEnd"),
      animationiteration: xh("Animation", "AnimationIteration"),
      animationstart: xh("Animation", "AnimationStart"),
      transitionend: xh("Transition", "TransitionEnd")
    }, $y = {}, W_ = {};
    On && (W_ = document.createElement("div").style, "AnimationEvent" in window || (delete Cf.animationend.animation, delete Cf.animationiteration.animation, delete Cf.animationstart.animation), "TransitionEvent" in window || delete Cf.transitionend.transition);
    function kh(e) {
      if ($y[e])
        return $y[e];
      if (!Cf[e])
        return e;
      var t = Cf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in W_)
          return $y[e] = t[a];
      return e;
    }
    var Q_ = kh("animationend"), G_ = kh("animationiteration"), K_ = kh("animationstart"), q_ = kh("transitionend"), X_ = /* @__PURE__ */ new Map(), Z_ = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Oo(e, t) {
      X_.set(e, t), ft(t, [e]);
    }
    function ET() {
      for (var e = 0; e < Z_.length; e++) {
        var t = Z_[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Oo(a, "on" + i);
      }
      Oo(Q_, "onAnimationEnd"), Oo(G_, "onAnimationIteration"), Oo(K_, "onAnimationStart"), Oo("dblclick", "onDoubleClick"), Oo("focusin", "onFocus"), Oo("focusout", "onBlur"), Oo(q_, "onTransitionEnd");
    }
    function CT(e, t, a, i, l, s, f) {
      var p = X_.get(t);
      if (p !== void 0) {
        var h = Mi, E = t;
        switch (t) {
          case "keypress":
            if (Vu(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            h = yh;
            break;
          case "focusin":
            E = "focus", h = nu;
            break;
          case "focusout":
            E = "blur", h = nu;
            break;
          case "beforeblur":
          case "afterblur":
            h = nu;
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
            h = qd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Al;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = _h;
            break;
          case Q_:
          case G_:
          case K_:
            h = dh;
            break;
          case q_:
            h = Fa;
            break;
          case "scroll":
            h = aa;
            break;
          case "wheel":
            h = jy;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = pf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = gh;
            break;
        }
        var C = (s & Da) !== 0;
        {
          var N = !C && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", L = bT(a, p, i.type, C, N);
          if (L.length > 0) {
            var H = new h(p, E, null, i, l);
            e.push({
              event: H,
              listeners: L
            });
          }
        }
      }
    }
    ET(), j(), $s(), yT(), Fy();
    function RT(e, t, a, i, l, s, f) {
      CT(e, t, a, i, l, s);
      var p = (s & Sd) === 0;
      p && (M(e, t, a, i, l), kn(e, t, a, i, l), _T(e, t, a, i, l), Th(e, t, a, i, l));
    }
    var lp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Yy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(lp));
    function J_(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ci(i, t, void 0, e), e.currentTarget = null;
    }
    function TT(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], f = s.instance, p = s.currentTarget, h = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          J_(e, h, p), i = f;
        }
      else
        for (var E = 0; E < t.length; E++) {
          var C = t[E], N = C.instance, L = C.currentTarget, H = C.listener;
          if (N !== i && e.isPropagationStopped())
            return;
          J_(e, H, L), i = N;
        }
    }
    function eE(e, t) {
      for (var a = (t & Da) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, f = l.listeners;
        TT(s, f, a);
      }
      ss();
    }
    function wT(e, t, a, i, l) {
      var s = _d(a), f = [];
      RT(f, e, i, a, s, t), eE(f, t);
    }
    function Sn(e, t) {
      Yy.has(e) || v('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = tb(t), l = DT(e);
      i.has(l) || (tE(t, e, _c, a), i.add(l));
    }
    function Wy(e, t, a) {
      Yy.has(e) && !t && v('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Da), tE(a, e, i, t);
    }
    var Dh = "_reactListening" + Math.random().toString(36).slice(2);
    function op(e) {
      if (!e[Dh]) {
        e[Dh] = !0, Xe.forEach(function(a) {
          a !== "selectionchange" && (Yy.has(a) || Wy(a, !1, e), Wy(a, !0, e));
        });
        var t = e.nodeType === Qi ? e : e.ownerDocument;
        t !== null && (t[Dh] || (t[Dh] = !0, Wy("selectionchange", !1, t)));
      }
    }
    function tE(e, t, a, i, l) {
      var s = cr(e, t, a), f = void 0;
      os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Kd(e, t, s, f) : ra(e, t, s) : f !== void 0 ? bo(e, t, s, f) : Fs(e, t, s);
    }
    function nE(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function Qy(e, t, a, i, l) {
      var s = i;
      if ((t & gd) === 0 && (t & _c) === 0) {
        var f = l;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var h = p.tag;
            if (h === W || h === J) {
              var E = p.stateNode.containerInfo;
              if (nE(E, f))
                break;
              if (h === J)
                for (var C = p.return; C !== null; ) {
                  var N = C.tag;
                  if (N === W || N === J) {
                    var L = C.stateNode.containerInfo;
                    if (nE(L, f))
                      return;
                  }
                  C = C.return;
                }
              for (; E !== null; ) {
                var H = Qs(E);
                if (H === null)
                  return;
                var $ = H.tag;
                if ($ === Z || $ === ve) {
                  p = s = H;
                  continue e;
                }
                E = E.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      jv(function() {
        return wT(e, t, a, s);
      });
    }
    function sp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function bT(e, t, a, i, l, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, h = [], E = e, C = null; E !== null; ) {
        var N = E, L = N.stateNode, H = N.tag;
        if (H === Z && L !== null && (C = L, p !== null)) {
          var $ = xu(E, p);
          $ != null && h.push(sp(E, $, C));
        }
        if (l)
          break;
        E = E.return;
      }
      return h;
    }
    function Oh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, f = s.stateNode, p = s.tag;
        if (p === Z && f !== null) {
          var h = f, E = xu(l, a);
          E != null && i.unshift(sp(l, E, h));
          var C = xu(l, t);
          C != null && i.push(sp(l, C, h));
        }
        l = l.return;
      }
      return i;
    }
    function Rf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Z);
      return e || null;
    }
    function xT(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = Rf(s))
        l++;
      for (var f = 0, p = i; p; p = Rf(p))
        f++;
      for (; l - f > 0; )
        a = Rf(a), l--;
      for (; f - l > 0; )
        i = Rf(i), f--;
      for (var h = l; h--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Rf(a), i = Rf(i);
      }
      return null;
    }
    function rE(e, t, a, i, l) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var h = p, E = h.alternate, C = h.stateNode, N = h.tag;
        if (E !== null && E === i)
          break;
        if (N === Z && C !== null) {
          var L = C;
          if (l) {
            var H = xu(p, s);
            H != null && f.unshift(sp(p, H, L));
          } else if (!l) {
            var $ = xu(p, s);
            $ != null && f.push(sp(p, $, L));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function kT(e, t, a, i, l) {
      var s = i && l ? xT(i, l) : null;
      i !== null && rE(e, t, i, s, !1), l !== null && a !== null && rE(e, a, l, s, !0);
    }
    function DT(e, t) {
      return e + "__bubble";
    }
    var Pa = !1, cp = "dangerouslySetInnerHTML", Lh = "suppressContentEditableWarning", Lo = "suppressHydrationWarning", aE = "autoFocus", Ys = "children", Ws = "style", Mh = "__html", Gy, Nh, fp, iE, Ah, uE, lE;
    Gy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Nh = function(e, t) {
      hd(e, t), gc(e, t), Av(e, t, {
        registrationNameDependencies: xe,
        possibleRegistrationNames: it
      });
    }, uE = On && !document.documentMode, fp = function(e, t, a) {
      if (!Pa) {
        var i = Uh(a), l = Uh(t);
        l !== i && (Pa = !0, v("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, iE = function(e) {
      if (!Pa) {
        Pa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), v("Extra attributes from the server: %s", t);
      }
    }, Ah = function(e, t) {
      t === !1 ? v("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : v("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, lE = function(e, t) {
      var a = e.namespaceURI === Yi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var OT = /\r\n?/g, LT = /\u0000|\uFFFD/g;
    function Uh(e) {
      qn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(OT, `
`).replace(LT, "");
    }
    function zh(e, t, a, i) {
      var l = Uh(t), s = Uh(e);
      if (s !== l && (i && (Pa || (Pa = !0, v('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && me))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function oE(e) {
      return e.nodeType === Qi ? e : e.ownerDocument;
    }
    function MT() {
    }
    function jh(e) {
      e.onclick = MT;
    }
    function NT(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ws)
            f && Object.freeze(f), kv(t, f);
          else if (s === cp) {
            var p = f ? f[Mh] : void 0;
            p != null && mv(t, p);
          } else if (s === Ys)
            if (typeof f == "string") {
              var h = e !== "textarea" || f !== "";
              h && lo(t, f);
            } else typeof f == "number" && lo(t, "" + f);
          else s === Lh || s === Lo || s === aE || (xe.hasOwnProperty(s) ? f != null && (typeof f != "function" && Ah(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && xr(t, s, f, l));
        }
    }
    function AT(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], f = t[l + 1];
        s === Ws ? kv(e, f) : s === cp ? mv(e, f) : s === Ys ? lo(e, f) : xr(e, s, f, i);
      }
    }
    function UT(e, t, a, i) {
      var l, s = oE(a), f, p = i;
      if (p === Yi && (p = od(e)), p === Yi) {
        if (l = wu(e, t), !l && e !== e.toLowerCase() && v("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var h = s.createElement("div");
          h.innerHTML = "<script><\/script>";
          var E = h.firstChild;
          f = h.removeChild(E);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var C = f;
          t.multiple ? C.multiple = !0 : t.size && (C.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Yi && !l && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !br.call(Gy, e) && (Gy[e] = !0, v("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function zT(e, t) {
      return oE(t).createTextNode(e);
    }
    function jT(e, t, a, i) {
      var l = wu(t, a);
      Nh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < lp.length; f++)
            Sn(lp[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          ti(e, a), s = uo(e, a), Sn("invalid", e);
          break;
        case "option":
          Ut(e, a), s = a;
          break;
        case "select":
          cl(e, a), s = Jo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          id(e, a), s = ad(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (mc(t, s), NT(t, e, i, s, l), t) {
        case "input":
          ei(e), B(e, a, !1);
          break;
        case "textarea":
          ei(e), vv(e);
          break;
        case "option":
          un(e, a);
          break;
        case "select":
          nd(e, a);
          break;
        default:
          typeof s.onClick == "function" && jh(e);
          break;
      }
    }
    function FT(e, t, a, i, l) {
      Nh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = uo(e, a), p = uo(e, i), s = [];
          break;
        case "select":
          f = Jo(e, a), p = Jo(e, i), s = [];
          break;
        case "textarea":
          f = ad(e, a), p = ad(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && jh(e);
          break;
      }
      mc(t, p);
      var h, E, C = null;
      for (h in f)
        if (!(p.hasOwnProperty(h) || !f.hasOwnProperty(h) || f[h] == null))
          if (h === Ws) {
            var N = f[h];
            for (E in N)
              N.hasOwnProperty(E) && (C || (C = {}), C[E] = "");
          } else h === cp || h === Ys || h === Lh || h === Lo || h === aE || (xe.hasOwnProperty(h) ? s || (s = []) : (s = s || []).push(h, null));
      for (h in p) {
        var L = p[h], H = f?.[h];
        if (!(!p.hasOwnProperty(h) || L === H || L == null && H == null))
          if (h === Ws)
            if (L && Object.freeze(L), H) {
              for (E in H)
                H.hasOwnProperty(E) && (!L || !L.hasOwnProperty(E)) && (C || (C = {}), C[E] = "");
              for (E in L)
                L.hasOwnProperty(E) && H[E] !== L[E] && (C || (C = {}), C[E] = L[E]);
            } else
              C || (s || (s = []), s.push(h, C)), C = L;
          else if (h === cp) {
            var $ = L ? L[Mh] : void 0, q = H ? H[Mh] : void 0;
            $ != null && q !== $ && (s = s || []).push(h, $);
          } else h === Ys ? (typeof L == "string" || typeof L == "number") && (s = s || []).push(h, "" + L) : h === Lh || h === Lo || (xe.hasOwnProperty(h) ? (L != null && (typeof L != "function" && Ah(h, L), h === "onScroll" && Sn("scroll", e)), !s && H !== L && (s = [])) : (s = s || []).push(h, L));
      }
      return C && (Ey(C, p[Ws]), (s = s || []).push(Ws, C)), s;
    }
    function PT(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && g(e, l);
      var s = wu(a, i), f = wu(a, l);
      switch (AT(e, t, s, f), a) {
        case "input":
          b(e, l);
          break;
        case "textarea":
          pv(e, l);
          break;
        case "select":
          pc(e, l);
          break;
      }
    }
    function VT(e) {
      {
        var t = e.toLowerCase();
        return as.hasOwnProperty(t) && as[t] || null;
      }
    }
    function HT(e, t, a, i, l, s, f) {
      var p, h;
      switch (p = wu(t, a), Nh(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var E = 0; E < lp.length; E++)
            Sn(lp[E], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          ti(e, a), Sn("invalid", e);
          break;
        case "option":
          Ut(e, a);
          break;
        case "select":
          cl(e, a), Sn("invalid", e);
          break;
        case "textarea":
          id(e, a), Sn("invalid", e);
          break;
      }
      mc(t, a);
      {
        h = /* @__PURE__ */ new Set();
        for (var C = e.attributes, N = 0; N < C.length; N++) {
          var L = C[N].name.toLowerCase();
          switch (L) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              h.add(C[N].name);
          }
        }
      }
      var H = null;
      for (var $ in a)
        if (a.hasOwnProperty($)) {
          var q = a[$];
          if ($ === Ys)
            typeof q == "string" ? e.textContent !== q && (a[Lo] !== !0 && zh(e.textContent, q, s, f), H = [Ys, q]) : typeof q == "number" && e.textContent !== "" + q && (a[Lo] !== !0 && zh(e.textContent, q, s, f), H = [Ys, "" + q]);
          else if (xe.hasOwnProperty($))
            q != null && (typeof q != "function" && Ah($, q), $ === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var we = void 0, Je = rn($);
            if (a[Lo] !== !0) {
              if (!($ === Lh || $ === Lo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              $ === "value" || $ === "checked" || $ === "selected")) {
                if ($ === cp) {
                  var We = e.innerHTML, Nt = q ? q[Mh] : void 0;
                  if (Nt != null) {
                    var kt = lE(e, Nt);
                    kt !== We && fp($, We, kt);
                  }
                } else if ($ === Ws) {
                  if (h.delete($), uE) {
                    var F = Sy(q);
                    we = e.getAttribute("style"), F !== we && fp($, we, F);
                  }
                } else if (p && !A)
                  h.delete($.toLowerCase()), we = rl(e, $, q), q !== we && fp($, we, q);
                else if (!vn($, Je, p) && !Xn($, q, Je, p)) {
                  var X = !1;
                  if (Je !== null)
                    h.delete(Je.attributeName), we = mu(e, $, q, Je);
                  else {
                    var P = i;
                    if (P === Yi && (P = od(t)), P === Yi)
                      h.delete($.toLowerCase());
                    else {
                      var ce = VT($);
                      ce !== null && ce !== $ && (X = !0, h.delete(ce)), h.delete($);
                    }
                    we = rl(e, $, q);
                  }
                  var Ae = A;
                  !Ae && q !== we && !X && fp($, we, q);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      h.size > 0 && a[Lo] !== !0 && iE(h), t) {
        case "input":
          ei(e), B(e, a, !0);
          break;
        case "textarea":
          ei(e), vv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && jh(e);
          break;
      }
      return H;
    }
    function BT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ky(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, v("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function qy(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, v('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Xy(e, t, a) {
      {
        if (Pa)
          return;
        Pa = !0, v("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Zy(e, t) {
      {
        if (t === "" || Pa)
          return;
        Pa = !0, v('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function IT(e, t, a) {
      switch (t) {
        case "input":
          Q(e, a);
          return;
        case "textarea":
          hy(e, a);
          return;
        case "select":
          rd(e, a);
          return;
      }
    }
    var dp = function() {
    }, pp = function() {
    };
    {
      var $T = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], sE = [
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
      ], YT = sE.concat(["button"]), WT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], cE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      pp = function(e, t) {
        var a = Et({}, e || cE), i = {
          tag: t
        };
        return sE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), YT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), $T.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var QT = function(e, t) {
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
            return WT.indexOf(t) === -1;
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
      }, GT = function(e, t) {
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
      }, fE = {};
      dp = function(e, t, a) {
        a = a || cE;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && v("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = QT(e, l) ? null : i, f = s ? null : GT(e, a), p = s || f;
        if (p) {
          var h = p.tag, E = !!s + "|" + e + "|" + h;
          if (!fE[E]) {
            fE[E] = !0;
            var C = e, N = "";
            if (e === "#text" ? /\S/.test(t) ? C = "Text nodes" : (C = "Whitespace text nodes", N = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : C = "<" + e + ">", s) {
              var L = "";
              h === "table" && e === "tr" && (L += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), v("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", C, h, N, L);
            } else
              v("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", C, h);
          }
        }
      };
    }
    var Fh = "suppressHydrationWarning", Ph = "$", Vh = "/$", vp = "$?", hp = "$!", KT = "style", Jy = null, eg = null;
    function qT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Qi:
        case cd: {
          t = i === Qi ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : sd(null, "");
          break;
        }
        default: {
          var s = i === Mn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = sd(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), h = pp(null, p);
        return {
          namespace: a,
          ancestorInfo: h
        };
      }
    }
    function XT(e, t, a) {
      {
        var i = e, l = sd(i.namespace, t), s = pp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function rO(e) {
      return e;
    }
    function ZT(e) {
      Jy = Fn(), eg = dT();
      var t = null;
      return Qn(!1), t;
    }
    function JT(e) {
      pT(eg), Qn(Jy), Jy = null, eg = null;
    }
    function ew(e, t, a, i, l) {
      var s;
      {
        var f = i;
        if (dp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, h = pp(f.ancestorInfo, e);
          dp(null, p, h);
        }
        s = f.namespace;
      }
      var E = UT(e, t, a, s);
      return gp(l, E), og(E, t), E;
    }
    function tw(e, t) {
      e.appendChild(t);
    }
    function nw(e, t, a, i, l) {
      switch (jT(e, t, a, i), t) {
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
    function rw(e, t, a, i, l, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, h = pp(f.ancestorInfo, t);
          dp(null, p, h);
        }
      }
      return FT(e, t, a, i);
    }
    function tg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function aw(e, t, a, i) {
      {
        var l = a;
        dp(null, e, l.ancestorInfo);
      }
      var s = zT(e, t);
      return gp(i, s), s;
    }
    function iw() {
      var e = window.event;
      return e === void 0 ? Ua : cf(e.type);
    }
    var ng = typeof setTimeout == "function" ? setTimeout : void 0, uw = typeof clearTimeout == "function" ? clearTimeout : void 0, rg = -1, dE = typeof Promise == "function" ? Promise : void 0, lw = typeof queueMicrotask == "function" ? queueMicrotask : typeof dE < "u" ? function(e) {
      return dE.resolve(null).then(e).catch(ow);
    } : ng;
    function ow(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function sw(e, t, a, i) {
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
    function cw(e, t, a, i, l, s) {
      PT(e, t, a, i, l), og(e, l);
    }
    function pE(e) {
      lo(e, "");
    }
    function fw(e, t, a) {
      e.nodeValue = a;
    }
    function dw(e, t) {
      e.appendChild(t);
    }
    function pw(e, t) {
      var a;
      e.nodeType === Mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && jh(a);
    }
    function vw(e, t, a) {
      e.insertBefore(t, a);
    }
    function hw(e, t, a) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function mw(e, t) {
      e.removeChild(t);
    }
    function yw(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function ag(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Mn) {
          var s = l.data;
          if (s === Vh)
            if (i === 0) {
              e.removeChild(l), Ll(t);
              return;
            } else
              i--;
          else (s === Ph || s === vp || s === hp) && i++;
        }
        a = l;
      } while (a);
      Ll(t);
    }
    function gw(e, t) {
      e.nodeType === Mn ? ag(e.parentNode, t) : e.nodeType === Gr && ag(e, t), Ll(e);
    }
    function Sw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function _w(e) {
      e.nodeValue = "";
    }
    function Ew(e, t) {
      e = e;
      var a = t[KT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = hc("display", i);
    }
    function Cw(e, t) {
      e.nodeValue = t;
    }
    function Rw(e) {
      e.nodeType === Gr ? e.textContent = "" : e.nodeType === Qi && e.documentElement && e.removeChild(e.documentElement);
    }
    function Tw(e, t, a) {
      return e.nodeType !== Gr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function ww(e, t) {
      return t === "" || e.nodeType !== Wi ? null : e;
    }
    function bw(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function vE(e) {
      return e.data === vp;
    }
    function ig(e) {
      return e.data === hp;
    }
    function xw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function kw(e, t) {
      e._reactRetry = t;
    }
    function Hh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Gr || t === Wi)
          break;
        if (t === Mn) {
          var a = e.data;
          if (a === Ph || a === hp || a === vp)
            break;
          if (a === Vh)
            return null;
        }
      }
      return e;
    }
    function mp(e) {
      return Hh(e.nextSibling);
    }
    function Dw(e) {
      return Hh(e.firstChild);
    }
    function Ow(e) {
      return Hh(e.firstChild);
    }
    function Lw(e) {
      return Hh(e.nextSibling);
    }
    function Mw(e, t, a, i, l, s, f) {
      gp(s, e), og(e, a);
      var p;
      {
        var h = l;
        p = h.namespace;
      }
      var E = (s.mode & wt) !== qe;
      return HT(e, t, a, p, i, E, f);
    }
    function Nw(e, t, a, i) {
      return gp(a, e), a.mode & wt, BT(e, t);
    }
    function Aw(e, t) {
      gp(t, e);
    }
    function Uw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Vh) {
            if (a === 0)
              return mp(t);
            a--;
          } else (i === Ph || i === hp || i === vp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function hE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Ph || i === hp || i === vp) {
            if (a === 0)
              return t;
            a--;
          } else i === Vh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function zw(e) {
      Ll(e);
    }
    function jw(e) {
      Ll(e);
    }
    function Fw(e) {
      return e !== "head" && e !== "body";
    }
    function Pw(e, t, a, i) {
      var l = !0;
      zh(t.nodeValue, a, i, l);
    }
    function Vw(e, t, a, i, l, s) {
      if (t[Fh] !== !0) {
        var f = !0;
        zh(i.nodeValue, l, s, f);
      }
    }
    function Hw(e, t) {
      t.nodeType === Gr ? Ky(e, t) : t.nodeType === Mn || qy(e, t);
    }
    function Bw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Gr ? Ky(a, t) : t.nodeType === Mn || qy(a, t));
      }
    }
    function Iw(e, t, a, i, l) {
      (l || t[Fh] !== !0) && (i.nodeType === Gr ? Ky(a, i) : i.nodeType === Mn || qy(a, i));
    }
    function $w(e, t, a) {
      Xy(e, t);
    }
    function Yw(e, t) {
      Zy(e, t);
    }
    function Ww(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Xy(i, t);
      }
    }
    function Qw(e, t) {
      {
        var a = e.parentNode;
        a !== null && Zy(a, t);
      }
    }
    function Gw(e, t, a, i, l, s) {
      (s || t[Fh] !== !0) && Xy(a, i);
    }
    function Kw(e, t, a, i, l) {
      (l || t[Fh] !== !0) && Zy(a, i);
    }
    function qw(e) {
      v("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Xw(e) {
      op(e);
    }
    var Tf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + Tf, ug = "__reactProps$" + Tf, yp = "__reactContainer$" + Tf, lg = "__reactEvents$" + Tf, Zw = "__reactListeners$" + Tf, Jw = "__reactHandles$" + Tf;
    function eb(e) {
      delete e[wf], delete e[ug], delete e[lg], delete e[Zw], delete e[Jw];
    }
    function gp(e, t) {
      t[wf] = e;
    }
    function Bh(e, t) {
      t[yp] = e;
    }
    function mE(e) {
      e[yp] = null;
    }
    function Sp(e) {
      return !!e[yp];
    }
    function Qs(e) {
      var t = e[wf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[yp] || a[wf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = hE(e); l !== null; ) {
              var s = l[wf];
              if (s)
                return s;
              l = hE(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Mo(e) {
      var t = e[wf] || e[yp];
      return t && (t.tag === Z || t.tag === ve || t.tag === pe || t.tag === W) ? t : null;
    }
    function bf(e) {
      if (e.tag === Z || e.tag === ve)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Ih(e) {
      return e[ug] || null;
    }
    function og(e, t) {
      e[ug] = t;
    }
    function tb(e) {
      var t = e[lg];
      return t === void 0 && (t = e[lg] = /* @__PURE__ */ new Set()), t;
    }
    var yE = {}, gE = m.ReactDebugCurrentFrame;
    function $h(e) {
      if (e) {
        var t = e._owner, a = Bi(e.type, e._source, t ? t.type : null);
        gE.setExtraStackFrame(a);
      } else
        gE.setExtraStackFrame(null);
    }
    function au(e, t, a, i, l) {
      {
        var s = Function.call.bind(br);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var h = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              p = E;
            }
            p && !(p instanceof Error) && ($h(l), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), $h(null)), p instanceof Error && !(p.message in yE) && (yE[p.message] = !0, $h(l), v("Failed %s type: %s", a, p.message), $h(null));
          }
      }
    }
    var sg = [], Yh;
    Yh = [];
    var jl = -1;
    function No(e) {
      return {
        current: e
      };
    }
    function ia(e, t) {
      if (jl < 0) {
        v("Unexpected pop.");
        return;
      }
      t !== Yh[jl] && v("Unexpected Fiber popped."), e.current = sg[jl], sg[jl] = null, Yh[jl] = null, jl--;
    }
    function ua(e, t, a) {
      jl++, sg[jl] = e.current, Yh[jl] = a, e.current = t;
    }
    var cg;
    cg = {};
    var oi = {};
    Object.freeze(oi);
    var Fl = No(oi), Yu = No(!1), fg = oi;
    function xf(e, t, a) {
      return a && Wu(t) ? fg : Fl.current;
    }
    function SE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function kf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return oi;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = pt(e) || "Unknown";
          au(i, s, "context", p);
        }
        return l && SE(e, t, s), s;
      }
    }
    function Wh() {
      return Yu.current;
    }
    function Wu(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Qh(e) {
      ia(Yu, e), ia(Fl, e);
    }
    function dg(e) {
      ia(Yu, e), ia(Fl, e);
    }
    function _E(e, t, a) {
      {
        if (Fl.current !== oi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ua(Fl, t, e), ua(Yu, a, e);
      }
    }
    function EE(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = pt(e) || "Unknown";
            cg[s] || (cg[s] = !0, v("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in l))
            throw new Error((pt(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var h = pt(e) || "Unknown";
          au(l, f, "child context", h);
        }
        return Et({}, a, f);
      }
    }
    function Gh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || oi;
        return fg = Fl.current, ua(Fl, a, e), ua(Yu, Yu.current, e), !0;
      }
    }
    function CE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = EE(e, t, fg);
          i.__reactInternalMemoizedMergedChildContext = l, ia(Yu, e), ia(Fl, e), ua(Fl, l, e), ua(Yu, a, e);
        } else
          ia(Yu, e), ua(Yu, a, e);
      }
    }
    function nb(e) {
      {
        if (!yl(e) || e.tag !== k)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case W:
              return t.stateNode.context;
            case k: {
              var a = t.type;
              if (Wu(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Ao = 0, Kh = 1, Pl = null, pg = !1, vg = !1;
    function RE(e) {
      Pl === null ? Pl = [e] : Pl.push(e);
    }
    function rb(e) {
      pg = !0, RE(e);
    }
    function TE() {
      pg && Uo();
    }
    function Uo() {
      if (!vg && Pl !== null) {
        vg = !0;
        var e = 0, t = ja();
        try {
          var a = !0, i = Pl;
          for (jn(Mr); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Pl = null, pg = !1;
        } catch (s) {
          throw Pl !== null && (Pl = Pl.slice(e + 1)), Cd(ds, Uo), s;
        } finally {
          jn(t), vg = !1;
        }
      }
      return null;
    }
    var Df = [], Of = 0, qh = null, Xh = 0, Ni = [], Ai = 0, Gs = null, Vl = 1, Hl = "";
    function ab(e) {
      return qs(), (e.flags & Ri) !== Ke;
    }
    function ib(e) {
      return qs(), Xh;
    }
    function ub() {
      var e = Hl, t = Vl, a = t & ~lb(t);
      return a.toString(32) + e;
    }
    function Ks(e, t) {
      qs(), Df[Of++] = Xh, Df[Of++] = qh, qh = e, Xh = t;
    }
    function wE(e, t, a) {
      qs(), Ni[Ai++] = Vl, Ni[Ai++] = Hl, Ni[Ai++] = Gs, Gs = e;
      var i = Vl, l = Hl, s = Zh(i) - 1, f = i & ~(1 << s), p = a + 1, h = Zh(t) + s;
      if (h > 30) {
        var E = s - s % 5, C = (1 << E) - 1, N = (f & C).toString(32), L = f >> E, H = s - E, $ = Zh(t) + H, q = p << H, we = q | L, Je = N + l;
        Vl = 1 << $ | we, Hl = Je;
      } else {
        var We = p << s, Nt = We | f, kt = l;
        Vl = 1 << h | Nt, Hl = kt;
      }
    }
    function hg(e) {
      qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ks(e, a), wE(e, a, i);
      }
    }
    function Zh(e) {
      return 32 - Un(e);
    }
    function lb(e) {
      return 1 << Zh(e) - 1;
    }
    function mg(e) {
      for (; e === qh; )
        qh = Df[--Of], Df[Of] = null, Xh = Df[--Of], Df[Of] = null;
      for (; e === Gs; )
        Gs = Ni[--Ai], Ni[Ai] = null, Hl = Ni[--Ai], Ni[Ai] = null, Vl = Ni[--Ai], Ni[Ai] = null;
    }
    function ob() {
      return qs(), Gs !== null ? {
        id: Vl,
        overflow: Hl
      } : null;
    }
    function sb(e, t) {
      qs(), Ni[Ai++] = Vl, Ni[Ai++] = Hl, Ni[Ai++] = Gs, Vl = t.id, Hl = t.overflow, Gs = e;
    }
    function qs() {
      jr() || v("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var zr = null, Ui = null, iu = !1, Xs = !1, zo = null;
    function cb() {
      iu && v("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function bE() {
      Xs = !0;
    }
    function fb() {
      return Xs;
    }
    function db(e) {
      var t = e.stateNode.containerInfo;
      return Ui = Ow(t), zr = e, iu = !0, zo = null, Xs = !1, !0;
    }
    function pb(e, t, a) {
      return Ui = Lw(t), zr = e, iu = !0, zo = null, Xs = !1, a !== null && sb(e, a), !0;
    }
    function xE(e, t) {
      switch (e.tag) {
        case W: {
          Hw(e.stateNode.containerInfo, t);
          break;
        }
        case Z: {
          var a = (e.mode & wt) !== qe;
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
        case pe: {
          var i = e.memoizedState;
          i.dehydrated !== null && Bw(i.dehydrated, t);
          break;
        }
      }
    }
    function kE(e, t) {
      xE(e, t);
      var a = yk();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Oa) : i.push(a);
    }
    function yg(e, t) {
      {
        if (Xs)
          return;
        switch (e.tag) {
          case W: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Z:
                var i = t.type;
                t.pendingProps, $w(a, i);
                break;
              case ve:
                var l = t.pendingProps;
                Yw(a, l);
                break;
            }
            break;
          }
          case Z: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case Z: {
                var h = t.type, E = t.pendingProps, C = (e.mode & wt) !== qe;
                Gw(
                  s,
                  f,
                  p,
                  h,
                  E,
                  // TODO: Delete this argument when we remove the legacy root API.
                  C
                );
                break;
              }
              case ve: {
                var N = t.pendingProps, L = (e.mode & wt) !== qe;
                Kw(
                  s,
                  f,
                  p,
                  N,
                  // TODO: Delete this argument when we remove the legacy root API.
                  L
                );
                break;
              }
            }
            break;
          }
          case pe: {
            var H = e.memoizedState, $ = H.dehydrated;
            if ($ !== null) switch (t.tag) {
              case Z:
                var q = t.type;
                t.pendingProps, Ww($, q);
                break;
              case ve:
                var we = t.pendingProps;
                Qw($, we);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function DE(e, t) {
      t.flags = t.flags & ~qr | mn, yg(e, t);
    }
    function OE(e, t) {
      switch (e.tag) {
        case Z: {
          var a = e.type;
          e.pendingProps;
          var i = Tw(t, a);
          return i !== null ? (e.stateNode = i, zr = e, Ui = Dw(i), !0) : !1;
        }
        case ve: {
          var l = e.pendingProps, s = ww(t, l);
          return s !== null ? (e.stateNode = s, zr = e, Ui = null, !0) : !1;
        }
        case pe: {
          var f = bw(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: ob(),
              retryLane: ea
            };
            e.memoizedState = p;
            var h = gk(f);
            return h.return = e, e.child = h, zr = e, Ui = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function gg(e) {
      return (e.mode & wt) !== qe && (e.flags & Qe) === Ke;
    }
    function Sg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function _g(e) {
      if (iu) {
        var t = Ui;
        if (!t) {
          gg(e) && (yg(zr, e), Sg()), DE(zr, e), iu = !1, zr = e;
          return;
        }
        var a = t;
        if (!OE(e, t)) {
          gg(e) && (yg(zr, e), Sg()), t = mp(a);
          var i = zr;
          if (!t || !OE(e, t)) {
            DE(zr, e), iu = !1, zr = e;
            return;
          }
          kE(i, a);
        }
      }
    }
    function vb(e, t, a) {
      var i = e.stateNode, l = !Xs, s = Mw(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function hb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Nw(t, a, e);
      if (i) {
        var l = zr;
        if (l !== null)
          switch (l.tag) {
            case W: {
              var s = l.stateNode.containerInfo, f = (l.mode & wt) !== qe;
              Pw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case Z: {
              var p = l.type, h = l.memoizedProps, E = l.stateNode, C = (l.mode & wt) !== qe;
              Vw(
                p,
                h,
                E,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                C
              );
              break;
            }
          }
      }
      return i;
    }
    function mb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Aw(a, e);
    }
    function yb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Uw(a);
    }
    function LE(e) {
      for (var t = e.return; t !== null && t.tag !== Z && t.tag !== W && t.tag !== pe; )
        t = t.return;
      zr = t;
    }
    function Jh(e) {
      if (e !== zr)
        return !1;
      if (!iu)
        return LE(e), iu = !0, !1;
      if (e.tag !== W && (e.tag !== Z || Fw(e.type) && !tg(e.type, e.memoizedProps))) {
        var t = Ui;
        if (t)
          if (gg(e))
            ME(e), Sg();
          else
            for (; t; )
              kE(e, t), t = mp(t);
      }
      return LE(e), e.tag === pe ? Ui = yb(e) : Ui = zr ? mp(e.stateNode) : null, !0;
    }
    function gb() {
      return iu && Ui !== null;
    }
    function ME(e) {
      for (var t = Ui; t; )
        xE(e, t), t = mp(t);
    }
    function Lf() {
      zr = null, Ui = null, iu = !1, Xs = !1;
    }
    function NE() {
      zo !== null && (b0(zo), zo = null);
    }
    function jr() {
      return iu;
    }
    function Eg(e) {
      zo === null ? zo = [e] : zo.push(e);
    }
    var Sb = m.ReactCurrentBatchConfig, _b = null;
    function Eb() {
      return Sb.transition;
    }
    var uu = {
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
      var Cb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Zt && (t = a), a = a.return;
        return t;
      }, Zs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, _p = [], Ep = [], Cp = [], Rp = [], Tp = [], wp = [], Js = /* @__PURE__ */ new Set();
      uu.recordUnsafeLifecycleWarnings = function(e, t) {
        Js.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && _p.push(e), e.mode & Zt && typeof t.UNSAFE_componentWillMount == "function" && Ep.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Cp.push(e), e.mode & Zt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Rp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Tp.push(e), e.mode & Zt && typeof t.UNSAFE_componentWillUpdate == "function" && wp.push(e));
      }, uu.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        _p.length > 0 && (_p.forEach(function(L) {
          e.add(pt(L) || "Component"), Js.add(L.type);
        }), _p = []);
        var t = /* @__PURE__ */ new Set();
        Ep.length > 0 && (Ep.forEach(function(L) {
          t.add(pt(L) || "Component"), Js.add(L.type);
        }), Ep = []);
        var a = /* @__PURE__ */ new Set();
        Cp.length > 0 && (Cp.forEach(function(L) {
          a.add(pt(L) || "Component"), Js.add(L.type);
        }), Cp = []);
        var i = /* @__PURE__ */ new Set();
        Rp.length > 0 && (Rp.forEach(function(L) {
          i.add(pt(L) || "Component"), Js.add(L.type);
        }), Rp = []);
        var l = /* @__PURE__ */ new Set();
        Tp.length > 0 && (Tp.forEach(function(L) {
          l.add(pt(L) || "Component"), Js.add(L.type);
        }), Tp = []);
        var s = /* @__PURE__ */ new Set();
        if (wp.length > 0 && (wp.forEach(function(L) {
          s.add(pt(L) || "Component"), Js.add(L.type);
        }), wp = []), t.size > 0) {
          var f = Zs(t);
          v(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Zs(i);
          v(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var h = Zs(s);
          v(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, h);
        }
        if (e.size > 0) {
          var E = Zs(e);
          T(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (a.size > 0) {
          var C = Zs(a);
          T(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (l.size > 0) {
          var N = Zs(l);
          T(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
        }
      };
      var em = /* @__PURE__ */ new Map(), AE = /* @__PURE__ */ new Set();
      uu.recordLegacyContextWarning = function(e, t) {
        var a = Cb(e);
        if (a === null) {
          v("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!AE.has(e.type)) {
          var i = em.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], em.set(a, i)), i.push(e));
        }
      }, uu.flushLegacyContextWarning = function() {
        em.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(pt(s) || "Component"), AE.add(s.type);
            });
            var l = Zs(i);
            try {
              Kt(a), v(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              cn();
            }
          }
        });
      }, uu.discardPendingWarnings = function() {
        _p = [], Ep = [], Cp = [], Rp = [], Tp = [], wp = [], em = /* @__PURE__ */ new Map();
      };
    }
    var Cg, Rg, Tg, wg, bg, UE = function(e, t) {
    };
    Cg = !1, Rg = !1, Tg = {}, wg = {}, bg = {}, UE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = pt(t) || "Component";
        wg[a] || (wg[a] = !0, v('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Rb(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function bp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Zt || G) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== k) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Rb(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = pt(e) || "Component";
          Tg[l] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), Tg[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== k)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var h = f;
          fi(i, "ref");
          var E = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === E)
            return t.ref;
          var C = function(N) {
            var L = h.refs;
            N === null ? delete L[E] : L[E] = N;
          };
          return C._stringRef = E, C;
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
    function tm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function nm(e) {
      {
        var t = pt(e) || "Component";
        if (bg[t])
          return;
        bg[t] = !0, v("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function zE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function jE(e) {
      function t(F, X) {
        if (e) {
          var P = F.deletions;
          P === null ? (F.deletions = [X], F.flags |= Oa) : P.push(X);
        }
      }
      function a(F, X) {
        if (!e)
          return null;
        for (var P = X; P !== null; )
          t(F, P), P = P.sibling;
        return null;
      }
      function i(F, X) {
        for (var P = /* @__PURE__ */ new Map(), ce = X; ce !== null; )
          ce.key !== null ? P.set(ce.key, ce) : P.set(ce.index, ce), ce = ce.sibling;
        return P;
      }
      function l(F, X) {
        var P = oc(F, X);
        return P.index = 0, P.sibling = null, P;
      }
      function s(F, X, P) {
        if (F.index = P, !e)
          return F.flags |= Ri, X;
        var ce = F.alternate;
        if (ce !== null) {
          var Ae = ce.index;
          return Ae < X ? (F.flags |= mn, X) : Ae;
        } else
          return F.flags |= mn, X;
      }
      function f(F) {
        return e && F.alternate === null && (F.flags |= mn), F;
      }
      function p(F, X, P, ce) {
        if (X === null || X.tag !== ve) {
          var Ae = E_(P, F.mode, ce);
          return Ae.return = F, Ae;
        } else {
          var ke = l(X, P);
          return ke.return = F, ke;
        }
      }
      function h(F, X, P, ce) {
        var Ae = P.type;
        if (Ae === pi)
          return C(F, X, P.props.children, ce, P.key);
        if (X !== null && (X.elementType === Ae || // Keep this check inline so it only runs on the false path:
        B0(X, P) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ae == "object" && Ae !== null && Ae.$$typeof === ht && zE(Ae) === X.type)) {
          var ke = l(X, P.props);
          return ke.ref = bp(F, X, P), ke.return = F, ke._debugSource = P._source, ke._debugOwner = P._owner, ke;
        }
        var lt = __(P, F.mode, ce);
        return lt.ref = bp(F, X, P), lt.return = F, lt;
      }
      function E(F, X, P, ce) {
        if (X === null || X.tag !== J || X.stateNode.containerInfo !== P.containerInfo || X.stateNode.implementation !== P.implementation) {
          var Ae = C_(P, F.mode, ce);
          return Ae.return = F, Ae;
        } else {
          var ke = l(X, P.children || []);
          return ke.return = F, ke;
        }
      }
      function C(F, X, P, ce, Ae) {
        if (X === null || X.tag !== he) {
          var ke = Qo(P, F.mode, ce, Ae);
          return ke.return = F, ke;
        } else {
          var lt = l(X, P);
          return lt.return = F, lt;
        }
      }
      function N(F, X, P) {
        if (typeof X == "string" && X !== "" || typeof X == "number") {
          var ce = E_("" + X, F.mode, P);
          return ce.return = F, ce;
        }
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case kr: {
              var Ae = __(X, F.mode, P);
              return Ae.ref = bp(F, null, X), Ae.return = F, Ae;
            }
            case ar: {
              var ke = C_(X, F.mode, P);
              return ke.return = F, ke;
            }
            case ht: {
              var lt = X._payload, yt = X._init;
              return N(F, yt(lt), P);
            }
          }
          if (Rt(X) || St(X)) {
            var en = Qo(X, F.mode, P, null);
            return en.return = F, en;
          }
          tm(F, X);
        }
        return typeof X == "function" && nm(F), null;
      }
      function L(F, X, P, ce) {
        var Ae = X !== null ? X.key : null;
        if (typeof P == "string" && P !== "" || typeof P == "number")
          return Ae !== null ? null : p(F, X, "" + P, ce);
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case kr:
              return P.key === Ae ? h(F, X, P, ce) : null;
            case ar:
              return P.key === Ae ? E(F, X, P, ce) : null;
            case ht: {
              var ke = P._payload, lt = P._init;
              return L(F, X, lt(ke), ce);
            }
          }
          if (Rt(P) || St(P))
            return Ae !== null ? null : C(F, X, P, ce, null);
          tm(F, P);
        }
        return typeof P == "function" && nm(F), null;
      }
      function H(F, X, P, ce, Ae) {
        if (typeof ce == "string" && ce !== "" || typeof ce == "number") {
          var ke = F.get(P) || null;
          return p(X, ke, "" + ce, Ae);
        }
        if (typeof ce == "object" && ce !== null) {
          switch (ce.$$typeof) {
            case kr: {
              var lt = F.get(ce.key === null ? P : ce.key) || null;
              return h(X, lt, ce, Ae);
            }
            case ar: {
              var yt = F.get(ce.key === null ? P : ce.key) || null;
              return E(X, yt, ce, Ae);
            }
            case ht:
              var en = ce._payload, Ht = ce._init;
              return H(F, X, P, Ht(en), Ae);
          }
          if (Rt(ce) || St(ce)) {
            var Gn = F.get(P) || null;
            return C(X, Gn, ce, Ae, null);
          }
          tm(X, ce);
        }
        return typeof ce == "function" && nm(X), null;
      }
      function $(F, X, P) {
        {
          if (typeof F != "object" || F === null)
            return X;
          switch (F.$$typeof) {
            case kr:
            case ar:
              UE(F, P);
              var ce = F.key;
              if (typeof ce != "string")
                break;
              if (X === null) {
                X = /* @__PURE__ */ new Set(), X.add(ce);
                break;
              }
              if (!X.has(ce)) {
                X.add(ce);
                break;
              }
              v("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ce);
              break;
            case ht:
              var Ae = F._payload, ke = F._init;
              $(ke(Ae), X, P);
              break;
          }
        }
        return X;
      }
      function q(F, X, P, ce) {
        for (var Ae = null, ke = 0; ke < P.length; ke++) {
          var lt = P[ke];
          Ae = $(lt, Ae, F);
        }
        for (var yt = null, en = null, Ht = X, Gn = 0, Bt = 0, Vn = null; Ht !== null && Bt < P.length; Bt++) {
          Ht.index > Bt ? (Vn = Ht, Ht = null) : Vn = Ht.sibling;
          var oa = L(F, Ht, P[Bt], ce);
          if (oa === null) {
            Ht === null && (Ht = Vn);
            break;
          }
          e && Ht && oa.alternate === null && t(F, Ht), Gn = s(oa, Gn, Bt), en === null ? yt = oa : en.sibling = oa, en = oa, Ht = Vn;
        }
        if (Bt === P.length) {
          if (a(F, Ht), jr()) {
            var $r = Bt;
            Ks(F, $r);
          }
          return yt;
        }
        if (Ht === null) {
          for (; Bt < P.length; Bt++) {
            var ci = N(F, P[Bt], ce);
            ci !== null && (Gn = s(ci, Gn, Bt), en === null ? yt = ci : en.sibling = ci, en = ci);
          }
          if (jr()) {
            var Ra = Bt;
            Ks(F, Ra);
          }
          return yt;
        }
        for (var Ta = i(F, Ht); Bt < P.length; Bt++) {
          var sa = H(Ta, F, Bt, P[Bt], ce);
          sa !== null && (e && sa.alternate !== null && Ta.delete(sa.key === null ? Bt : sa.key), Gn = s(sa, Gn, Bt), en === null ? yt = sa : en.sibling = sa, en = sa);
        }
        if (e && Ta.forEach(function(qf) {
          return t(F, qf);
        }), jr()) {
          var Gl = Bt;
          Ks(F, Gl);
        }
        return yt;
      }
      function we(F, X, P, ce) {
        var Ae = St(P);
        if (typeof Ae != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          P[Symbol.toStringTag] === "Generator" && (Rg || v("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Rg = !0), P.entries === Ae && (Cg || v("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Cg = !0);
          var ke = Ae.call(P);
          if (ke)
            for (var lt = null, yt = ke.next(); !yt.done; yt = ke.next()) {
              var en = yt.value;
              lt = $(en, lt, F);
            }
        }
        var Ht = Ae.call(P);
        if (Ht == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, Bt = null, Vn = X, oa = 0, $r = 0, ci = null, Ra = Ht.next(); Vn !== null && !Ra.done; $r++, Ra = Ht.next()) {
          Vn.index > $r ? (ci = Vn, Vn = null) : ci = Vn.sibling;
          var Ta = L(F, Vn, Ra.value, ce);
          if (Ta === null) {
            Vn === null && (Vn = ci);
            break;
          }
          e && Vn && Ta.alternate === null && t(F, Vn), oa = s(Ta, oa, $r), Bt === null ? Gn = Ta : Bt.sibling = Ta, Bt = Ta, Vn = ci;
        }
        if (Ra.done) {
          if (a(F, Vn), jr()) {
            var sa = $r;
            Ks(F, sa);
          }
          return Gn;
        }
        if (Vn === null) {
          for (; !Ra.done; $r++, Ra = Ht.next()) {
            var Gl = N(F, Ra.value, ce);
            Gl !== null && (oa = s(Gl, oa, $r), Bt === null ? Gn = Gl : Bt.sibling = Gl, Bt = Gl);
          }
          if (jr()) {
            var qf = $r;
            Ks(F, qf);
          }
          return Gn;
        }
        for (var av = i(F, Vn); !Ra.done; $r++, Ra = Ht.next()) {
          var el = H(av, F, $r, Ra.value, ce);
          el !== null && (e && el.alternate !== null && av.delete(el.key === null ? $r : el.key), oa = s(el, oa, $r), Bt === null ? Gn = el : Bt.sibling = el, Bt = el);
        }
        if (e && av.forEach(function(Kk) {
          return t(F, Kk);
        }), jr()) {
          var Gk = $r;
          Ks(F, Gk);
        }
        return Gn;
      }
      function Je(F, X, P, ce) {
        if (X !== null && X.tag === ve) {
          a(F, X.sibling);
          var Ae = l(X, P);
          return Ae.return = F, Ae;
        }
        a(F, X);
        var ke = E_(P, F.mode, ce);
        return ke.return = F, ke;
      }
      function We(F, X, P, ce) {
        for (var Ae = P.key, ke = X; ke !== null; ) {
          if (ke.key === Ae) {
            var lt = P.type;
            if (lt === pi) {
              if (ke.tag === he) {
                a(F, ke.sibling);
                var yt = l(ke, P.props.children);
                return yt.return = F, yt._debugSource = P._source, yt._debugOwner = P._owner, yt;
              }
            } else if (ke.elementType === lt || // Keep this check inline so it only runs on the false path:
            B0(ke, P) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof lt == "object" && lt !== null && lt.$$typeof === ht && zE(lt) === ke.type) {
              a(F, ke.sibling);
              var en = l(ke, P.props);
              return en.ref = bp(F, ke, P), en.return = F, en._debugSource = P._source, en._debugOwner = P._owner, en;
            }
            a(F, ke);
            break;
          } else
            t(F, ke);
          ke = ke.sibling;
        }
        if (P.type === pi) {
          var Ht = Qo(P.props.children, F.mode, ce, P.key);
          return Ht.return = F, Ht;
        } else {
          var Gn = __(P, F.mode, ce);
          return Gn.ref = bp(F, X, P), Gn.return = F, Gn;
        }
      }
      function Nt(F, X, P, ce) {
        for (var Ae = P.key, ke = X; ke !== null; ) {
          if (ke.key === Ae)
            if (ke.tag === J && ke.stateNode.containerInfo === P.containerInfo && ke.stateNode.implementation === P.implementation) {
              a(F, ke.sibling);
              var lt = l(ke, P.children || []);
              return lt.return = F, lt;
            } else {
              a(F, ke);
              break;
            }
          else
            t(F, ke);
          ke = ke.sibling;
        }
        var yt = C_(P, F.mode, ce);
        return yt.return = F, yt;
      }
      function kt(F, X, P, ce) {
        var Ae = typeof P == "object" && P !== null && P.type === pi && P.key === null;
        if (Ae && (P = P.props.children), typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case kr:
              return f(We(F, X, P, ce));
            case ar:
              return f(Nt(F, X, P, ce));
            case ht:
              var ke = P._payload, lt = P._init;
              return kt(F, X, lt(ke), ce);
          }
          if (Rt(P))
            return q(F, X, P, ce);
          if (St(P))
            return we(F, X, P, ce);
          tm(F, P);
        }
        return typeof P == "string" && P !== "" || typeof P == "number" ? f(Je(F, X, "" + P, ce)) : (typeof P == "function" && nm(F), a(F, X));
      }
      return kt;
    }
    var Mf = jE(!0), FE = jE(!1);
    function Tb(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = oc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = oc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function wb(e, t) {
      for (var a = e.child; a !== null; )
        dk(a, t), a = a.sibling;
    }
    var xg = No(null), kg;
    kg = {};
    var rm = null, Nf = null, Dg = null, am = !1;
    function im() {
      rm = null, Nf = null, Dg = null, am = !1;
    }
    function PE() {
      am = !0;
    }
    function VE() {
      am = !1;
    }
    function HE(e, t, a) {
      ua(xg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== kg && v("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = kg;
    }
    function Og(e, t) {
      var a = xg.current;
      ia(xg, t), e._currentValue = a;
    }
    function Lg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Ol(i.childLanes, t) ? l !== null && !Ol(l.childLanes, t) && (l.childLanes = _t(l.childLanes, t)) : (i.childLanes = _t(i.childLanes, t), l !== null && (l.childLanes = _t(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && v("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function bb(e, t, a) {
      xb(e, t, a);
    }
    function xb(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === k) {
                var p = bs(a), h = Bl(tn, p);
                h.tag = lm;
                var E = i.updateQueue;
                if (E !== null) {
                  var C = E.shared, N = C.pending;
                  N === null ? h.next = h : (h.next = N.next, N.next = h), C.pending = h;
                }
              }
              i.lanes = _t(i.lanes, a);
              var L = i.alternate;
              L !== null && (L.lanes = _t(L.lanes, a)), Lg(i.return, a, e), s.lanes = _t(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Me)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === st) {
          var H = i.return;
          if (H === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          H.lanes = _t(H.lanes, a);
          var $ = H.alternate;
          $ !== null && ($.lanes = _t($.lanes, a)), Lg(H, a, e), l = i.sibling;
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
            var q = l.sibling;
            if (q !== null) {
              q.return = l.return, l = q;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function Af(e, t) {
      rm = e, Nf = null, Dg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ta(a.lanes, t) && Hp(), a.firstContext = null);
      }
    }
    function nr(e) {
      am && v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Dg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Nf === null) {
          if (rm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Nf = a, rm.dependencies = {
            lanes: ae,
            firstContext: a
          };
        } else
          Nf = Nf.next = a;
      }
      return t;
    }
    var ec = null;
    function Mg(e) {
      ec === null ? ec = [e] : ec.push(e);
    }
    function kb() {
      if (ec !== null) {
        for (var e = 0; e < ec.length; e++) {
          var t = ec[e], a = t.interleaved;
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
        ec = null;
      }
    }
    function BE(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Mg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, um(e, i);
    }
    function Db(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, Mg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function Ob(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Mg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, um(e, i);
    }
    function Va(e, t) {
      return um(e, t);
    }
    var Lb = um;
    function um(e, t) {
      e.lanes = _t(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = _t(a.lanes, t)), a === null && (e.flags & (mn | qr)) !== Ke && F0(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = _t(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = _t(a.childLanes, t) : (l.flags & (mn | qr)) !== Ke && F0(e), i = l, l = l.return;
      if (i.tag === W) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var IE = 0, $E = 1, lm = 2, Ng = 3, om = !1, Ag, sm;
    Ag = !1, sm = null;
    function Ug(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ae
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function YE(e, t) {
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
    function Bl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: IE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function jo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (sm === l && !Ag && (v("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Ag = !0), D1()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, Lb(e, a);
      } else
        return Ob(e, l, t, a);
    }
    function cm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Pd(a)) {
          var s = l.lanes;
          s = Hd(s, e.pendingLanes);
          var f = _t(s, a);
          l.lanes = f, uf(e, f);
        }
      }
    }
    function zg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var h = p;
            do {
              var E = {
                eventTime: h.eventTime,
                lane: h.lane,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              };
              f === null ? s = f = E : (f.next = E, f = E), h = h.next;
            } while (h !== null);
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
      var C = a.lastBaseUpdate;
      C === null ? a.firstBaseUpdate = t : C.next = t, a.lastBaseUpdate = t;
    }
    function Mb(e, t, a, i, l, s) {
      switch (a.tag) {
        case $E: {
          var f = a.payload;
          if (typeof f == "function") {
            PE();
            var p = f.call(s, i, l);
            {
              if (e.mode & Zt) {
                yn(!0);
                try {
                  f.call(s, i, l);
                } finally {
                  yn(!1);
                }
              }
              VE();
            }
            return p;
          }
          return f;
        }
        case Ng:
          e.flags = e.flags & ~Zn | Qe;
        // Intentional fallthrough
        case IE: {
          var h = a.payload, E;
          if (typeof h == "function") {
            PE(), E = h.call(s, i, l);
            {
              if (e.mode & Zt) {
                yn(!0);
                try {
                  h.call(s, i, l);
                } finally {
                  yn(!1);
                }
              }
              VE();
            }
          } else
            E = h;
          return E == null ? i : Et({}, i, E);
        }
        case lm:
          return om = !0, i;
      }
      return i;
    }
    function fm(e, t, a, i) {
      var l = e.updateQueue;
      om = !1, sm = l.shared;
      var s = l.firstBaseUpdate, f = l.lastBaseUpdate, p = l.shared.pending;
      if (p !== null) {
        l.shared.pending = null;
        var h = p, E = h.next;
        h.next = null, f === null ? s = E : f.next = E, f = h;
        var C = e.alternate;
        if (C !== null) {
          var N = C.updateQueue, L = N.lastBaseUpdate;
          L !== f && (L === null ? N.firstBaseUpdate = E : L.next = E, N.lastBaseUpdate = h);
        }
      }
      if (s !== null) {
        var H = l.baseState, $ = ae, q = null, we = null, Je = null, We = s;
        do {
          var Nt = We.lane, kt = We.eventTime;
          if (Ol(i, Nt)) {
            if (Je !== null) {
              var X = {
                eventTime: kt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: zt,
                tag: We.tag,
                payload: We.payload,
                callback: We.callback,
                next: null
              };
              Je = Je.next = X;
            }
            H = Mb(e, l, We, H, t, a);
            var P = We.callback;
            if (P !== null && // If the update was already committed, we should not queue its
            // callback again.
            We.lane !== zt) {
              e.flags |= ln;
              var ce = l.effects;
              ce === null ? l.effects = [We] : ce.push(We);
            }
          } else {
            var F = {
              eventTime: kt,
              lane: Nt,
              tag: We.tag,
              payload: We.payload,
              callback: We.callback,
              next: null
            };
            Je === null ? (we = Je = F, q = H) : Je = Je.next = F, $ = _t($, Nt);
          }
          if (We = We.next, We === null) {
            if (p = l.shared.pending, p === null)
              break;
            var Ae = p, ke = Ae.next;
            Ae.next = null, We = ke, l.lastBaseUpdate = Ae, l.shared.pending = null;
          }
        } while (!0);
        Je === null && (q = H), l.baseState = q, l.firstBaseUpdate = we, l.lastBaseUpdate = Je;
        var lt = l.shared.interleaved;
        if (lt !== null) {
          var yt = lt;
          do
            $ = _t($, yt.lane), yt = yt.next;
          while (yt !== lt);
        } else s === null && (l.shared.lanes = ae);
        Jp($), e.lanes = $, e.memoizedState = H;
      }
      sm = null;
    }
    function Nb(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function WE() {
      om = !1;
    }
    function dm() {
      return om;
    }
    function QE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], f = s.callback;
          f !== null && (s.callback = null, Nb(f, a));
        }
    }
    var xp = {}, Fo = No(xp), kp = No(xp), pm = No(xp);
    function vm(e) {
      if (e === xp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function GE() {
      var e = vm(pm.current);
      return e;
    }
    function jg(e, t) {
      ua(pm, t, e), ua(kp, e, e), ua(Fo, xp, e);
      var a = qT(t);
      ia(Fo, e), ua(Fo, a, e);
    }
    function Uf(e) {
      ia(Fo, e), ia(kp, e), ia(pm, e);
    }
    function Fg() {
      var e = vm(Fo.current);
      return e;
    }
    function KE(e) {
      vm(pm.current);
      var t = vm(Fo.current), a = XT(t, e.type);
      t !== a && (ua(kp, e, e), ua(Fo, a, e));
    }
    function Pg(e) {
      kp.current === e && (ia(Fo, e), ia(kp, e));
    }
    var Ab = 0, qE = 1, XE = 1, Dp = 2, lu = No(Ab);
    function Vg(e, t) {
      return (e & t) !== 0;
    }
    function zf(e) {
      return e & qE;
    }
    function Hg(e, t) {
      return e & qE | t;
    }
    function Ub(e, t) {
      return e | t;
    }
    function Po(e, t) {
      ua(lu, t, e);
    }
    function jf(e) {
      ia(lu, e);
    }
    function zb(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function hm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === pe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || vE(i) || ig(i))
              return t;
          }
        } else if (t.tag === ct && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & Qe) !== Ke;
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
    var Ha = (
      /*   */
      0
    ), fr = (
      /* */
      1
    ), Qu = (
      /*  */
      2
    ), dr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), Bg = [];
    function Ig() {
      for (var e = 0; e < Bg.length; e++) {
        var t = Bg[e];
        t._workInProgressVersionPrimary = null;
      }
      Bg.length = 0;
    }
    function jb(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Le = m.ReactCurrentDispatcher, Op = m.ReactCurrentBatchConfig, $g, Ff;
    $g = /* @__PURE__ */ new Set();
    var tc = ae, Jt = null, pr = null, vr = null, mm = !1, Lp = !1, Mp = 0, Fb = 0, Pb = 25, ne = null, zi = null, Vo = -1, Yg = !1;
    function Yt() {
      {
        var e = ne;
        zi === null ? zi = [e] : zi.push(e);
      }
    }
    function ge() {
      {
        var e = ne;
        zi !== null && (Vo++, zi[Vo] !== e && Vb(e));
      }
    }
    function Pf(e) {
      e != null && !Rt(e) && v("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ne, typeof e);
    }
    function Vb(e) {
      {
        var t = pt(Jt);
        if (!$g.has(t) && ($g.add(t), zi !== null)) {
          for (var a = "", i = 30, l = 0; l <= Vo; l++) {
            for (var s = zi[l], f = l === Vo ? e : s, p = l + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          v(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function la() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Wg(e, t) {
      if (Yg)
        return !1;
      if (t === null)
        return v("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ne), !1;
      e.length !== t.length && v(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ne, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!oe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Vf(e, t, a, i, l, s) {
      tc = s, Jt = t, zi = e !== null ? e._debugHookTypes : null, Vo = -1, Yg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ae, e !== null && e.memoizedState !== null ? Le.current = SC : zi !== null ? Le.current = gC : Le.current = yC;
      var f = a(i, l);
      if (Lp) {
        var p = 0;
        do {
          if (Lp = !1, Mp = 0, p >= Pb)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Yg = !1, pr = null, vr = null, t.updateQueue = null, Vo = -1, Le.current = _C, f = a(i, l);
        } while (Lp);
      }
      Le.current = Dm, t._debugHookTypes = zi;
      var h = pr !== null && pr.next !== null;
      if (tc = ae, Jt = null, pr = null, vr = null, ne = null, zi = null, Vo = -1, e !== null && (e.flags & An) !== (t.flags & An) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & wt) !== qe && v("Internal React error: Expected static flag was missing. Please notify the React team."), mm = !1, h)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Hf() {
      var e = Mp !== 0;
      return Mp = 0, e;
    }
    function ZE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Pt) !== qe ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = xs(e.lanes, a);
    }
    function JE() {
      if (Le.current = Dm, mm) {
        for (var e = Jt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        mm = !1;
      }
      tc = ae, Jt = null, pr = null, vr = null, zi = null, Vo = -1, ne = null, dC = !1, Lp = !1, Mp = 0;
    }
    function Gu() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return vr === null ? Jt.memoizedState = vr = e : vr = vr.next = e, vr;
    }
    function ji() {
      var e;
      if (pr === null) {
        var t = Jt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = pr.next;
      var a;
      if (vr === null ? a = Jt.memoizedState : a = vr.next, a !== null)
        vr = a, a = vr.next, pr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        pr = e;
        var i = {
          memoizedState: pr.memoizedState,
          baseState: pr.baseState,
          baseQueue: pr.baseQueue,
          queue: pr.queue,
          next: null
        };
        vr === null ? Jt.memoizedState = vr = i : vr = vr.next = i;
      }
      return vr;
    }
    function eC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Qg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Gg(e, t, a) {
      var i = Gu(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ae,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var f = s.dispatch = $b.bind(null, Jt, s);
      return [i.memoizedState, f];
    }
    function Kg(e, t, a) {
      var i = ji(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = pr, f = s.baseQueue, p = l.pending;
      if (p !== null) {
        if (f !== null) {
          var h = f.next, E = p.next;
          f.next = E, p.next = h;
        }
        s.baseQueue !== f && v("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, l.pending = null;
      }
      if (f !== null) {
        var C = f.next, N = s.baseState, L = null, H = null, $ = null, q = C;
        do {
          var we = q.lane;
          if (Ol(tc, we)) {
            if ($ !== null) {
              var We = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: zt,
                action: q.action,
                hasEagerState: q.hasEagerState,
                eagerState: q.eagerState,
                next: null
              };
              $ = $.next = We;
            }
            if (q.hasEagerState)
              N = q.eagerState;
            else {
              var Nt = q.action;
              N = e(N, Nt);
            }
          } else {
            var Je = {
              lane: we,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            };
            $ === null ? (H = $ = Je, L = N) : $ = $.next = Je, Jt.lanes = _t(Jt.lanes, we), Jp(we);
          }
          q = q.next;
        } while (q !== null && q !== C);
        $ === null ? L = N : $.next = H, oe(N, i.memoizedState) || Hp(), i.memoizedState = N, i.baseState = L, i.baseQueue = $, l.lastRenderedState = N;
      }
      var kt = l.interleaved;
      if (kt !== null) {
        var F = kt;
        do {
          var X = F.lane;
          Jt.lanes = _t(Jt.lanes, X), Jp(X), F = F.next;
        } while (F !== kt);
      } else f === null && (l.lanes = ae);
      var P = l.dispatch;
      return [i.memoizedState, P];
    }
    function qg(e, t, a) {
      var i = ji(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, f = l.pending, p = i.memoizedState;
      if (f !== null) {
        l.pending = null;
        var h = f.next, E = h;
        do {
          var C = E.action;
          p = e(p, C), E = E.next;
        } while (E !== h);
        oe(p, i.memoizedState) || Hp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), l.lastRenderedState = p;
      }
      return [p, s];
    }
    function aO(e, t, a) {
    }
    function iO(e, t, a) {
    }
    function Xg(e, t, a) {
      var i = Jt, l = Gu(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Ff || s !== a() && (v("The result of getServerSnapshot should be cached to avoid an infinite loop"), Ff = !0);
      } else {
        if (s = t(), !Ff) {
          var p = t();
          oe(s, p) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), Ff = !0);
        }
        var h = Gm();
        if (h === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        rf(h, tc) || tC(i, t, s);
      }
      l.memoizedState = s;
      var E = {
        value: s,
        getSnapshot: t
      };
      return l.queue = E, Em(rC.bind(null, i, E, e), [e]), i.flags |= Kr, Np(fr | Fr, nC.bind(null, i, E, s, t), void 0, null), s;
    }
    function ym(e, t, a) {
      var i = Jt, l = ji(), s = t();
      if (!Ff) {
        var f = t();
        oe(s, f) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), Ff = !0);
      }
      var p = l.memoizedState, h = !oe(p, s);
      h && (l.memoizedState = s, Hp());
      var E = l.queue;
      if (Up(rC.bind(null, i, E, e), [e]), E.getSnapshot !== t || h || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      vr !== null && vr.memoizedState.tag & fr) {
        i.flags |= Kr, Np(fr | Fr, nC.bind(null, i, E, s, t), void 0, null);
        var C = Gm();
        if (C === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        rf(C, tc) || tC(i, t, s);
      }
      return s;
    }
    function tC(e, t, a) {
      e.flags |= yo;
      var i = {
        getSnapshot: t,
        value: a
      }, l = Jt.updateQueue;
      if (l === null)
        l = eC(), Jt.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function nC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, aC(t) && iC(e);
    }
    function rC(e, t, a) {
      var i = function() {
        aC(t) && iC(e);
      };
      return a(i);
    }
    function aC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !oe(a, i);
      } catch {
        return !0;
      }
    }
    function iC(e) {
      var t = Va(e, ut);
      t !== null && gr(t, e, ut, tn);
    }
    function gm(e) {
      var t = Gu();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ae,
        dispatch: null,
        lastRenderedReducer: Qg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Yb.bind(null, Jt, a);
      return [t.memoizedState, i];
    }
    function Zg(e) {
      return Kg(Qg);
    }
    function Jg(e) {
      return qg(Qg);
    }
    function Np(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Jt.updateQueue;
      if (s === null)
        s = eC(), Jt.updateQueue = s, s.lastEffect = l.next = l;
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
    function eS(e) {
      var t = Gu();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Sm(e) {
      var t = ji();
      return t.memoizedState;
    }
    function Ap(e, t, a, i) {
      var l = Gu(), s = i === void 0 ? null : i;
      Jt.flags |= e, l.memoizedState = Np(fr | t, a, void 0, s);
    }
    function _m(e, t, a, i) {
      var l = ji(), s = i === void 0 ? null : i, f = void 0;
      if (pr !== null) {
        var p = pr.memoizedState;
        if (f = p.destroy, s !== null) {
          var h = p.deps;
          if (Wg(s, h)) {
            l.memoizedState = Np(t, a, f, s);
            return;
          }
        }
      }
      Jt.flags |= e, l.memoizedState = Np(fr | t, a, f, s);
    }
    function Em(e, t) {
      return (Jt.mode & Pt) !== qe ? Ap(Ti | Kr | Oc, Fr, e, t) : Ap(Kr | Oc, Fr, e, t);
    }
    function Up(e, t) {
      return _m(Kr, Fr, e, t);
    }
    function tS(e, t) {
      return Ap(Ot, Qu, e, t);
    }
    function Cm(e, t) {
      return _m(Ot, Qu, e, t);
    }
    function nS(e, t) {
      var a = Ot;
      return a |= Ki, (Jt.mode & Pt) !== qe && (a |= Du), Ap(a, dr, e, t);
    }
    function Rm(e, t) {
      return _m(Ot, dr, e, t);
    }
    function uC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || v("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function rS(e, t, a) {
      typeof t != "function" && v("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = Ot;
      return l |= Ki, (Jt.mode & Pt) !== qe && (l |= Du), Ap(l, dr, uC.bind(null, t, e), i);
    }
    function Tm(e, t, a) {
      typeof t != "function" && v("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return _m(Ot, dr, uC.bind(null, t, e), i);
    }
    function Hb(e, t) {
    }
    var wm = Hb;
    function aS(e, t) {
      var a = Gu(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function bm(e, t) {
      var a = ji(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (Wg(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function iS(e, t) {
      var a = Gu(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function xm(e, t) {
      var a = ji(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (Wg(i, s))
          return l[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function uS(e) {
      var t = Gu();
      return t.memoizedState = e, e;
    }
    function lC(e) {
      var t = ji(), a = pr, i = a.memoizedState;
      return sC(t, i, e);
    }
    function oC(e) {
      var t = ji();
      if (pr === null)
        return t.memoizedState = e, e;
      var a = pr.memoizedState;
      return sC(t, a, e);
    }
    function sC(e, t, a) {
      var i = !jd(tc);
      if (i) {
        if (!oe(a, t)) {
          var l = Vd();
          Jt.lanes = _t(Jt.lanes, l), Jp(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Hp()), e.memoizedState = a, a;
    }
    function Bb(e, t, a) {
      var i = ja();
      jn(ah(i, ki)), e(!0);
      var l = Op.transition;
      Op.transition = {};
      var s = Op.transition;
      Op.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (jn(i), Op.transition = l, l === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && T("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function lS() {
      var e = gm(!1), t = e[0], a = e[1], i = Bb.bind(null, a), l = Gu();
      return l.memoizedState = i, [t, i];
    }
    function cC() {
      var e = Zg(), t = e[0], a = ji(), i = a.memoizedState;
      return [t, i];
    }
    function fC() {
      var e = Jg(), t = e[0], a = ji(), i = a.memoizedState;
      return [t, i];
    }
    var dC = !1;
    function Ib() {
      return dC;
    }
    function oS() {
      var e = Gu(), t = Gm(), a = t.identifierPrefix, i;
      if (jr()) {
        var l = ub();
        i = ":" + a + "R" + l;
        var s = Mp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Fb++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function km() {
      var e = ji(), t = e.memoizedState;
      return t;
    }
    function $b(e, t, a) {
      typeof arguments[3] == "function" && v("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Yo(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (pC(e))
        vC(t, l);
      else {
        var s = BE(e, t, l, i);
        if (s !== null) {
          var f = Ca();
          gr(s, e, i, f), hC(s, t, i);
        }
      }
      mC(e, i);
    }
    function Yb(e, t, a) {
      typeof arguments[3] == "function" && v("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Yo(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (pC(e))
        vC(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === ae && (s === null || s.lanes === ae)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Le.current, Le.current = ou;
            try {
              var h = t.lastRenderedState, E = f(h, a);
              if (l.hasEagerState = !0, l.eagerState = E, oe(E, h)) {
                Db(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              Le.current = p;
            }
          }
        }
        var C = BE(e, t, l, i);
        if (C !== null) {
          var N = Ca();
          gr(C, e, i, N), hC(C, t, i);
        }
      }
      mC(e, i);
    }
    function pC(e) {
      var t = e.alternate;
      return e === Jt || t !== null && t === Jt;
    }
    function vC(e, t) {
      Lp = mm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function hC(e, t, a) {
      if (Pd(a)) {
        var i = t.lanes;
        i = Hd(i, e.pendingLanes);
        var l = _t(i, a);
        t.lanes = l, uf(e, l);
      }
    }
    function mC(e, t, a) {
      ys(e, t);
    }
    var Dm = {
      readContext: nr,
      useCallback: la,
      useContext: la,
      useEffect: la,
      useImperativeHandle: la,
      useInsertionEffect: la,
      useLayoutEffect: la,
      useMemo: la,
      useReducer: la,
      useRef: la,
      useState: la,
      useDebugValue: la,
      useDeferredValue: la,
      useTransition: la,
      useMutableSource: la,
      useSyncExternalStore: la,
      useId: la,
      unstable_isNewReconciler: te
    }, yC = null, gC = null, SC = null, _C = null, Ku = null, ou = null, Om = null;
    {
      var sS = function() {
        v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, mt = function() {
        v("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      yC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Yt(), Pf(t), aS(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Yt(), nr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Yt(), Pf(t), Em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Yt(), Pf(a), rS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Yt(), Pf(t), tS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Yt(), Pf(t), nS(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Yt(), Pf(t);
          var a = Le.current;
          Le.current = Ku;
          try {
            return iS(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Yt();
          var i = Le.current;
          Le.current = Ku;
          try {
            return Gg(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Yt(), eS(e);
        },
        useState: function(e) {
          ne = "useState", Yt();
          var t = Le.current;
          Le.current = Ku;
          try {
            return gm(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Yt(), uS(e);
        },
        useTransition: function() {
          return ne = "useTransition", Yt(), lS();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Yt(), Xg(e, t, a);
        },
        useId: function() {
          return ne = "useId", Yt(), oS();
        },
        unstable_isNewReconciler: te
      }, gC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", ge(), aS(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", ge(), nr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", ge(), Em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", ge(), rS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", ge(), tS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", ge(), nS(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", ge();
          var a = Le.current;
          Le.current = Ku;
          try {
            return iS(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", ge();
          var i = Le.current;
          Le.current = Ku;
          try {
            return Gg(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", ge(), eS(e);
        },
        useState: function(e) {
          ne = "useState", ge();
          var t = Le.current;
          Le.current = Ku;
          try {
            return gm(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", ge(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", ge(), uS(e);
        },
        useTransition: function() {
          return ne = "useTransition", ge(), lS();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", ge(), Xg(e, t, a);
        },
        useId: function() {
          return ne = "useId", ge(), oS();
        },
        unstable_isNewReconciler: te
      }, SC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", ge(), bm(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", ge(), nr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", ge(), Up(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", ge(), Tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", ge(), Cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", ge(), Rm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", ge();
          var a = Le.current;
          Le.current = ou;
          try {
            return xm(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", ge();
          var i = Le.current;
          Le.current = ou;
          try {
            return Kg(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", ge(), Sm();
        },
        useState: function(e) {
          ne = "useState", ge();
          var t = Le.current;
          Le.current = ou;
          try {
            return Zg(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", ge(), wm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", ge(), lC(e);
        },
        useTransition: function() {
          return ne = "useTransition", ge(), cC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", ge(), ym(e, t);
        },
        useId: function() {
          return ne = "useId", ge(), km();
        },
        unstable_isNewReconciler: te
      }, _C = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", ge(), bm(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", ge(), nr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", ge(), Up(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", ge(), Tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", ge(), Cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", ge(), Rm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", ge();
          var a = Le.current;
          Le.current = Om;
          try {
            return xm(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", ge();
          var i = Le.current;
          Le.current = Om;
          try {
            return qg(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", ge(), Sm();
        },
        useState: function(e) {
          ne = "useState", ge();
          var t = Le.current;
          Le.current = Om;
          try {
            return Jg(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", ge(), wm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", ge(), oC(e);
        },
        useTransition: function() {
          return ne = "useTransition", ge(), fC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", ge(), ym(e, t);
        },
        useId: function() {
          return ne = "useId", ge(), km();
        },
        unstable_isNewReconciler: te
      }, Ku = {
        readContext: function(e) {
          return sS(), nr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", mt(), Yt(), aS(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", mt(), Yt(), nr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", mt(), Yt(), Em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", mt(), Yt(), rS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", mt(), Yt(), tS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", mt(), Yt(), nS(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", mt(), Yt();
          var a = Le.current;
          Le.current = Ku;
          try {
            return iS(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", mt(), Yt();
          var i = Le.current;
          Le.current = Ku;
          try {
            return Gg(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", mt(), Yt(), eS(e);
        },
        useState: function(e) {
          ne = "useState", mt(), Yt();
          var t = Le.current;
          Le.current = Ku;
          try {
            return gm(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", mt(), Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", mt(), Yt(), uS(e);
        },
        useTransition: function() {
          return ne = "useTransition", mt(), Yt(), lS();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", mt(), Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", mt(), Yt(), Xg(e, t, a);
        },
        useId: function() {
          return ne = "useId", mt(), Yt(), oS();
        },
        unstable_isNewReconciler: te
      }, ou = {
        readContext: function(e) {
          return sS(), nr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", mt(), ge(), bm(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", mt(), ge(), nr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", mt(), ge(), Up(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", mt(), ge(), Tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", mt(), ge(), Cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", mt(), ge(), Rm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", mt(), ge();
          var a = Le.current;
          Le.current = ou;
          try {
            return xm(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", mt(), ge();
          var i = Le.current;
          Le.current = ou;
          try {
            return Kg(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", mt(), ge(), Sm();
        },
        useState: function(e) {
          ne = "useState", mt(), ge();
          var t = Le.current;
          Le.current = ou;
          try {
            return Zg(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", mt(), ge(), wm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", mt(), ge(), lC(e);
        },
        useTransition: function() {
          return ne = "useTransition", mt(), ge(), cC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", mt(), ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", mt(), ge(), ym(e, t);
        },
        useId: function() {
          return ne = "useId", mt(), ge(), km();
        },
        unstable_isNewReconciler: te
      }, Om = {
        readContext: function(e) {
          return sS(), nr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", mt(), ge(), bm(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", mt(), ge(), nr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", mt(), ge(), Up(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", mt(), ge(), Tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", mt(), ge(), Cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", mt(), ge(), Rm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", mt(), ge();
          var a = Le.current;
          Le.current = ou;
          try {
            return xm(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", mt(), ge();
          var i = Le.current;
          Le.current = ou;
          try {
            return qg(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", mt(), ge(), Sm();
        },
        useState: function(e) {
          ne = "useState", mt(), ge();
          var t = Le.current;
          Le.current = ou;
          try {
            return Jg(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", mt(), ge(), wm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", mt(), ge(), oC(e);
        },
        useTransition: function() {
          return ne = "useTransition", mt(), ge(), fC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", mt(), ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", mt(), ge(), ym(e, t);
        },
        useId: function() {
          return ne = "useId", mt(), ge(), km();
        },
        unstable_isNewReconciler: te
      };
    }
    var Ho = S.unstable_now, EC = 0, Lm = -1, zp = -1, Mm = -1, cS = !1, Nm = !1;
    function CC() {
      return cS;
    }
    function Wb() {
      Nm = !0;
    }
    function Qb() {
      cS = !1, Nm = !1;
    }
    function Gb() {
      cS = Nm, Nm = !1;
    }
    function RC() {
      return EC;
    }
    function TC() {
      EC = Ho();
    }
    function fS(e) {
      zp = Ho(), e.actualStartTime < 0 && (e.actualStartTime = Ho());
    }
    function wC(e) {
      zp = -1;
    }
    function Am(e, t) {
      if (zp >= 0) {
        var a = Ho() - zp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), zp = -1;
      }
    }
    function qu(e) {
      if (Lm >= 0) {
        var t = Ho() - Lm;
        Lm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case W:
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
    function dS(e) {
      if (Mm >= 0) {
        var t = Ho() - Mm;
        Mm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case W:
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
    function Xu() {
      Lm = Ho();
    }
    function pS() {
      Mm = Ho();
    }
    function vS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function su(e, t) {
      if (e && e.defaultProps) {
        var a = Et({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var hS = {}, mS, yS, gS, SS, _S, bC, Um, ES, CS, RS, jp;
    {
      mS = /* @__PURE__ */ new Set(), yS = /* @__PURE__ */ new Set(), gS = /* @__PURE__ */ new Set(), SS = /* @__PURE__ */ new Set(), ES = /* @__PURE__ */ new Set(), _S = /* @__PURE__ */ new Set(), CS = /* @__PURE__ */ new Set(), RS = /* @__PURE__ */ new Set(), jp = /* @__PURE__ */ new Set();
      var xC = /* @__PURE__ */ new Set();
      Um = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          xC.has(a) || (xC.add(a), v("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, bC = function(e, t) {
        if (t === void 0) {
          var a = At(e) || "Component";
          _S.has(a) || (_S.add(a), v("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(hS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(hS);
    }
    function TS(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & Zt) {
          yn(!0);
          try {
            s = a(i, l);
          } finally {
            yn(!1);
          }
        }
        bC(t, s);
      }
      var f = s == null ? l : Et({}, l, s);
      if (e.memoizedState = f, e.lanes === ae) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var wS = {
      isMounted: Bv,
      enqueueSetState: function(e, t, a) {
        var i = mo(e), l = Ca(), s = Yo(i), f = Bl(l, s);
        f.payload = t, a != null && (Um(a, "setState"), f.callback = a);
        var p = jo(i, f, s);
        p !== null && (gr(p, i, s, l), cm(p, i, s)), ys(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = mo(e), l = Ca(), s = Yo(i), f = Bl(l, s);
        f.tag = $E, f.payload = t, a != null && (Um(a, "replaceState"), f.callback = a);
        var p = jo(i, f, s);
        p !== null && (gr(p, i, s, l), cm(p, i, s)), ys(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = mo(e), i = Ca(), l = Yo(a), s = Bl(i, l);
        s.tag = lm, t != null && (Um(t, "forceUpdate"), s.callback = t);
        var f = jo(a, s, l);
        f !== null && (gr(f, a, l, i), cm(f, a, l)), jc(a, l);
      }
    };
    function kC(e, t, a, i, l, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var h = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Zt) {
            yn(!0);
            try {
              h = p.shouldComponentUpdate(i, s, f);
            } finally {
              yn(!1);
            }
          }
          h === void 0 && v("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", At(t) || "Component");
        }
        return h;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ve(a, i) || !Ve(l, s) : !0;
    }
    function Kb(e, t, a) {
      var i = e.stateNode;
      {
        var l = At(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? v("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : v("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && v("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && v("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && v("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && v("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !jp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Zt) === qe && (jp.add(t), v(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !jp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Zt) === qe && (jp.add(t), v(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && v("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !CS.has(t) && (CS.add(t), v("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && v("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && v("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", At(t) || "A pure component"), typeof i.componentDidUnmount == "function" && v("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && v("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && v("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && v("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var f = i.props !== a;
        i.props !== void 0 && f && v("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && v("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !gS.has(t) && (gS.add(t), v("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", At(t))), typeof i.getDerivedStateFromProps == "function" && v("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && v("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && v("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var p = i.state;
        p && (typeof p != "object" || Rt(p)) && v("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && v("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function DC(e, t) {
      t.updater = wS, e.stateNode = t, ml(t, e), t._reactInternalInstance = hS;
    }
    function OC(e, t, a) {
      var i = !1, l = oi, s = oi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === x && f._context === void 0
        );
        if (!p && !RS.has(t)) {
          RS.add(t);
          var h = "";
          f === void 0 ? h = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? h = " However, it is set to a " + typeof f + "." : f.$$typeof === hi ? h = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? h = " Did you accidentally pass the Context.Consumer instead?" : h = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", v("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", At(t) || "Component", h);
        }
      }
      if (typeof f == "object" && f !== null)
        s = nr(f);
      else {
        l = xf(e, t, !0);
        var E = t.contextTypes;
        i = E != null, s = i ? kf(e, l) : oi;
      }
      var C = new t(a, s);
      if (e.mode & Zt) {
        yn(!0);
        try {
          C = new t(a, s);
        } finally {
          yn(!1);
        }
      }
      var N = e.memoizedState = C.state !== null && C.state !== void 0 ? C.state : null;
      DC(e, C);
      {
        if (typeof t.getDerivedStateFromProps == "function" && N === null) {
          var L = At(t) || "Component";
          yS.has(L) || (yS.add(L), v("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", L, C.state === null ? "null" : "undefined", L));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof C.getSnapshotBeforeUpdate == "function") {
          var H = null, $ = null, q = null;
          if (typeof C.componentWillMount == "function" && C.componentWillMount.__suppressDeprecationWarning !== !0 ? H = "componentWillMount" : typeof C.UNSAFE_componentWillMount == "function" && (H = "UNSAFE_componentWillMount"), typeof C.componentWillReceiveProps == "function" && C.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? $ = "componentWillReceiveProps" : typeof C.UNSAFE_componentWillReceiveProps == "function" && ($ = "UNSAFE_componentWillReceiveProps"), typeof C.componentWillUpdate == "function" && C.componentWillUpdate.__suppressDeprecationWarning !== !0 ? q = "componentWillUpdate" : typeof C.UNSAFE_componentWillUpdate == "function" && (q = "UNSAFE_componentWillUpdate"), H !== null || $ !== null || q !== null) {
            var we = At(t) || "Component", Je = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            SS.has(we) || (SS.add(we), v(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, we, Je, H !== null ? `
  ` + H : "", $ !== null ? `
  ` + $ : "", q !== null ? `
  ` + q : ""));
          }
        }
      }
      return i && SE(e, l, s), C;
    }
    function qb(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (v("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", pt(e) || "Component"), wS.enqueueReplaceState(t, t.state, null));
    }
    function LC(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = pt(e) || "Component";
          mS.has(s) || (mS.add(s), v("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        wS.enqueueReplaceState(t, t.state, null);
      }
    }
    function bS(e, t, a, i) {
      Kb(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, Ug(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = nr(s);
      else {
        var f = xf(e, t, !0);
        l.context = kf(e, f);
      }
      {
        if (l.state === a) {
          var p = At(t) || "Component";
          ES.has(p) || (ES.add(p), v("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Zt && uu.recordLegacyContextWarning(e, l), uu.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var h = t.getDerivedStateFromProps;
      if (typeof h == "function" && (TS(e, t, h, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (qb(e, l), fm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var E = Ot;
        E |= Ki, (e.mode & Pt) !== qe && (E |= Du), e.flags |= E;
      }
    }
    function Xb(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var f = l.context, p = t.contextType, h = oi;
      if (typeof p == "object" && p !== null)
        h = nr(p);
      else {
        var E = xf(e, t, !0);
        h = kf(e, E);
      }
      var C = t.getDerivedStateFromProps, N = typeof C == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !N && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || f !== h) && LC(e, l, a, h), WE();
      var L = e.memoizedState, H = l.state = L;
      if (fm(e, a, l, i), H = e.memoizedState, s === a && L === H && !Wh() && !dm()) {
        if (typeof l.componentDidMount == "function") {
          var $ = Ot;
          $ |= Ki, (e.mode & Pt) !== qe && ($ |= Du), e.flags |= $;
        }
        return !1;
      }
      typeof C == "function" && (TS(e, t, C, a), H = e.memoizedState);
      var q = dm() || kC(e, t, s, a, L, H, h);
      if (q) {
        if (!N && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var we = Ot;
          we |= Ki, (e.mode & Pt) !== qe && (we |= Du), e.flags |= we;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var Je = Ot;
          Je |= Ki, (e.mode & Pt) !== qe && (Je |= Du), e.flags |= Je;
        }
        e.memoizedProps = a, e.memoizedState = H;
      }
      return l.props = a, l.state = H, l.context = h, q;
    }
    function Zb(e, t, a, i, l) {
      var s = t.stateNode;
      YE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : su(t.type, f);
      s.props = p;
      var h = t.pendingProps, E = s.context, C = a.contextType, N = oi;
      if (typeof C == "object" && C !== null)
        N = nr(C);
      else {
        var L = xf(t, a, !0);
        N = kf(t, L);
      }
      var H = a.getDerivedStateFromProps, $ = typeof H == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !$ && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== h || E !== N) && LC(t, s, i, N), WE();
      var q = t.memoizedState, we = s.state = q;
      if (fm(t, i, s, l), we = t.memoizedState, f === h && q === we && !Wh() && !dm() && !be)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= Ot), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= Yn), !1;
      typeof H == "function" && (TS(t, a, H, i), we = t.memoizedState);
      var Je = dm() || kC(t, a, p, i, q, we, N) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      be;
      return Je ? (!$ && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, we, N), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, we, N)), typeof s.componentDidUpdate == "function" && (t.flags |= Ot), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Yn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= Ot), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= Yn), t.memoizedProps = i, t.memoizedState = we), s.props = i, s.state = we, s.context = N, Je;
    }
    function nc(e, t) {
      return {
        value: e,
        source: t,
        stack: Ii(t),
        digest: null
      };
    }
    function xS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Jb(e, t) {
      return !0;
    }
    function kS(e, t) {
      try {
        var a = Jb(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === k)
            return;
          console.error(i);
        }
        var p = l ? pt(l) : null, h = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", E;
        if (e.tag === W)
          E = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var C = pt(e) || "Anonymous";
          E = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + C + ".");
        }
        var N = h + `
` + f + `

` + ("" + E);
        console.error(N);
      } catch (L) {
        setTimeout(function() {
          throw L;
        });
      }
    }
    var ex = typeof WeakMap == "function" ? WeakMap : Map;
    function MC(e, t, a) {
      var i = Bl(tn, a);
      i.tag = Ng, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        W1(l), kS(e, t);
      }, i;
    }
    function DS(e, t, a) {
      var i = Bl(tn, a);
      i.tag = Ng;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          I0(e), kS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        I0(e), kS(e, t), typeof l != "function" && $1(this);
        var h = t.value, E = t.stack;
        this.componentDidCatch(h, {
          componentStack: E !== null ? E : ""
        }), typeof l != "function" && (ta(e.lanes, ut) || v("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", pt(e) || "Unknown"));
      }), i;
    }
    function NC(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new ex(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = Q1.bind(null, e, t, a);
        Jr && ev(e, a), t.then(s, s);
      }
    }
    function tx(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function nx(e, t) {
      var a = e.tag;
      if ((e.mode & wt) === qe && (a === O || a === Ee || a === Be)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function AC(e) {
      var t = e;
      do {
        if (t.tag === pe && zb(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function UC(e, t, a, i, l) {
      if ((e.mode & wt) === qe) {
        if (e === t)
          e.flags |= Zn;
        else {
          if (e.flags |= Qe, a.flags |= Dc, a.flags &= -52805, a.tag === k) {
            var s = a.alternate;
            if (s === null)
              a.tag = at;
            else {
              var f = Bl(tn, ut);
              f.tag = lm, jo(a, f, ut);
            }
          }
          a.lanes = _t(a.lanes, ut);
        }
        return e;
      }
      return e.flags |= Zn, e.lanes = l, e;
    }
    function rx(e, t, a, i, l) {
      if (a.flags |= fs, Jr && ev(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        nx(a), jr() && a.mode & wt && bE();
        var f = AC(t);
        if (f !== null) {
          f.flags &= ~Cr, UC(f, t, a, e, l), f.mode & wt && NC(e, s, l), tx(f, e, s);
          return;
        } else {
          if (!qv(l)) {
            NC(e, s, l), o_();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & wt) {
        bE();
        var h = AC(t);
        if (h !== null) {
          (h.flags & Zn) === Ke && (h.flags |= Cr), UC(h, t, a, e, l), Eg(nc(i, a));
          return;
        }
      }
      i = nc(i, a), z1(i);
      var E = t;
      do {
        switch (E.tag) {
          case W: {
            var C = i;
            E.flags |= Zn;
            var N = bs(l);
            E.lanes = _t(E.lanes, N);
            var L = MC(E, C, N);
            zg(E, L);
            return;
          }
          case k:
            var H = i, $ = E.type, q = E.stateNode;
            if ((E.flags & Qe) === Ke && (typeof $.getDerivedStateFromError == "function" || q !== null && typeof q.componentDidCatch == "function" && !A0(q))) {
              E.flags |= Zn;
              var we = bs(l);
              E.lanes = _t(E.lanes, we);
              var Je = DS(E, H, we);
              zg(E, Je);
              return;
            }
            break;
        }
        E = E.return;
      } while (E !== null);
    }
    function ax() {
      return null;
    }
    var Fp = m.ReactCurrentOwner, cu = !1, OS, Pp, LS, MS, NS, rc, AS, zm, Vp;
    OS = {}, Pp = {}, LS = {}, MS = {}, NS = {}, rc = !1, AS = {}, zm = {}, Vp = {};
    function _a(e, t, a, i) {
      e === null ? t.child = FE(t, null, a, i) : t.child = Mf(t, e.child, a, i);
    }
    function ix(e, t, a, i) {
      t.child = Mf(t, e.child, null, i), t.child = Mf(t, null, a, i);
    }
    function zC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && au(
          s,
          i,
          // Resolved props
          "prop",
          At(a)
        );
      }
      var f = a.render, p = t.ref, h, E;
      Af(t, l), ma(t);
      {
        if (Fp.current = t, $n(!0), h = Vf(e, t, f, i, p, l), E = Hf(), t.mode & Zt) {
          yn(!0);
          try {
            h = Vf(e, t, f, i, p, l), E = Hf();
          } finally {
            yn(!1);
          }
        }
        $n(!1);
      }
      return ya(), e !== null && !cu ? (ZE(e, t, l), Il(e, t, l)) : (jr() && E && hg(t), t.flags |= ri, _a(e, t, h, l), t.child);
    }
    function jC(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (ck(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Kf(s), t.tag = Be, t.type = f, jS(t, s), FC(e, t, f, i, l);
        }
        {
          var p = s.propTypes;
          if (p && au(
            p,
            i,
            // Resolved props
            "prop",
            At(s)
          ), a.defaultProps !== void 0) {
            var h = At(s) || "Unknown";
            Vp[h] || (v("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", h), Vp[h] = !0);
          }
        }
        var E = S_(a.type, null, i, t, t.mode, l);
        return E.ref = t.ref, E.return = t, t.child = E, E;
      }
      {
        var C = a.type, N = C.propTypes;
        N && au(
          N,
          i,
          // Resolved props
          "prop",
          At(C)
        );
      }
      var L = e.child, H = IS(e, l);
      if (!H) {
        var $ = L.memoizedProps, q = a.compare;
        if (q = q !== null ? q : Ve, q($, i) && e.ref === t.ref)
          return Il(e, t, l);
      }
      t.flags |= ri;
      var we = oc(L, i);
      return we.ref = t.ref, we.return = t, t.child = we, we;
    }
    function FC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === ht) {
          var f = s, p = f._payload, h = f._init;
          try {
            s = h(p);
          } catch {
            s = null;
          }
          var E = s && s.propTypes;
          E && au(
            E,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            At(s)
          );
        }
      }
      if (e !== null) {
        var C = e.memoizedProps;
        if (Ve(C, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (cu = !1, t.pendingProps = i = C, IS(e, l))
            (e.flags & Dc) !== Ke && (cu = !0);
          else return t.lanes = e.lanes, Il(e, t, l);
      }
      return US(e, t, a, i, l);
    }
    function PC(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || fe)
        if ((t.mode & wt) === qe) {
          var f = {
            baseLanes: ae,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Km(t, a);
        } else if (ta(a, ea)) {
          var N = {
            baseLanes: ae,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = N;
          var L = s !== null ? s.baseLanes : a;
          Km(t, L);
        } else {
          var p = null, h;
          if (s !== null) {
            var E = s.baseLanes;
            h = _t(E, a);
          } else
            h = a;
          t.lanes = t.childLanes = ea;
          var C = {
            baseLanes: h,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = C, t.updateQueue = null, Km(t, h), null;
        }
      else {
        var H;
        s !== null ? (H = _t(s.baseLanes, a), t.memoizedState = null) : H = a, Km(t, H);
      }
      return _a(e, t, l, a), t.child;
    }
    function ux(e, t, a) {
      var i = t.pendingProps;
      return _a(e, t, i, a), t.child;
    }
    function lx(e, t, a) {
      var i = t.pendingProps.children;
      return _a(e, t, i, a), t.child;
    }
    function ox(e, t, a) {
      {
        t.flags |= Ot;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return _a(e, t, s, a), t.child;
    }
    function VC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= _n, t.flags |= go);
    }
    function US(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && au(
          s,
          i,
          // Resolved props
          "prop",
          At(a)
        );
      }
      var f;
      {
        var p = xf(t, a, !0);
        f = kf(t, p);
      }
      var h, E;
      Af(t, l), ma(t);
      {
        if (Fp.current = t, $n(!0), h = Vf(e, t, a, i, f, l), E = Hf(), t.mode & Zt) {
          yn(!0);
          try {
            h = Vf(e, t, a, i, f, l), E = Hf();
          } finally {
            yn(!1);
          }
        }
        $n(!1);
      }
      return ya(), e !== null && !cu ? (ZE(e, t, l), Il(e, t, l)) : (jr() && E && hg(t), t.flags |= ri, _a(e, t, h, l), t.child);
    }
    function HC(e, t, a, i, l) {
      {
        switch (wk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), h = p.state;
            s.updater.enqueueSetState(s, h, null);
            break;
          }
          case !0: {
            t.flags |= Qe, t.flags |= Zn;
            var E = new Error("Simulated error coming from DevTools"), C = bs(l);
            t.lanes = _t(t.lanes, C);
            var N = DS(t, nc(E, t), C);
            zg(t, N);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var L = a.propTypes;
          L && au(
            L,
            i,
            // Resolved props
            "prop",
            At(a)
          );
        }
      }
      var H;
      Wu(a) ? (H = !0, Gh(t)) : H = !1, Af(t, l);
      var $ = t.stateNode, q;
      $ === null ? (Fm(e, t), OC(t, a, i), bS(t, a, i, l), q = !0) : e === null ? q = Xb(t, a, i, l) : q = Zb(e, t, a, i, l);
      var we = zS(e, t, a, q, H, l);
      {
        var Je = t.stateNode;
        q && Je.props !== i && (rc || v("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", pt(t) || "a component"), rc = !0);
      }
      return we;
    }
    function zS(e, t, a, i, l, s) {
      VC(e, t);
      var f = (t.flags & Qe) !== Ke;
      if (!i && !f)
        return l && CE(t, a, !1), Il(e, t, s);
      var p = t.stateNode;
      Fp.current = t;
      var h;
      if (f && typeof a.getDerivedStateFromError != "function")
        h = null, wC();
      else {
        ma(t);
        {
          if ($n(!0), h = p.render(), t.mode & Zt) {
            yn(!0);
            try {
              p.render();
            } finally {
              yn(!1);
            }
          }
          $n(!1);
        }
        ya();
      }
      return t.flags |= ri, e !== null && f ? ix(e, t, h, s) : _a(e, t, h, s), t.memoizedState = p.state, l && CE(t, a, !0), t.child;
    }
    function BC(e) {
      var t = e.stateNode;
      t.pendingContext ? _E(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _E(e, t.context, !1), jg(e, t.containerInfo);
    }
    function sx(e, t, a) {
      if (BC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      YE(e, t), fm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (l.isDehydrated) {
        var h = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, E = t.updateQueue;
        if (E.baseState = h, t.memoizedState = h, t.flags & Cr) {
          var C = nc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return IC(e, t, p, a, C);
        } else if (p !== s) {
          var N = nc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return IC(e, t, p, a, N);
        } else {
          db(t);
          var L = FE(t, null, p, a);
          t.child = L;
          for (var H = L; H; )
            H.flags = H.flags & ~mn | qr, H = H.sibling;
        }
      } else {
        if (Lf(), p === s)
          return Il(e, t, a);
        _a(e, t, p, a);
      }
      return t.child;
    }
    function IC(e, t, a, i, l) {
      return Lf(), Eg(l), t.flags |= Cr, _a(e, t, a, i), t.child;
    }
    function cx(e, t, a) {
      KE(t), e === null && _g(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, p = tg(i, l);
      return p ? f = null : s !== null && tg(i, s) && (t.flags |= La), VC(e, t), _a(e, t, f, a), t.child;
    }
    function fx(e, t) {
      return e === null && _g(t), null;
    }
    function dx(e, t, a, i) {
      Fm(e, t);
      var l = t.pendingProps, s = a, f = s._payload, p = s._init, h = p(f);
      t.type = h;
      var E = t.tag = fk(h), C = su(h, l), N;
      switch (E) {
        case O:
          return jS(t, h), t.type = h = Kf(h), N = US(null, t, h, C, i), N;
        case k:
          return t.type = h = p_(h), N = HC(null, t, h, C, i), N;
        case Ee:
          return t.type = h = v_(h), N = zC(null, t, h, C, i), N;
        case et: {
          if (t.type !== t.elementType) {
            var L = h.propTypes;
            L && au(
              L,
              C,
              // Resolved for outer only
              "prop",
              At(h)
            );
          }
          return N = jC(
            null,
            t,
            h,
            su(h.type, C),
            // The inner type can have defaults too
            i
          ), N;
        }
      }
      var H = "";
      throw h !== null && typeof h == "object" && h.$$typeof === ht && (H = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + h + ". " + ("Lazy element type must resolve to a class or function." + H));
    }
    function px(e, t, a, i, l) {
      Fm(e, t), t.tag = k;
      var s;
      return Wu(a) ? (s = !0, Gh(t)) : s = !1, Af(t, l), OC(t, a, i), bS(t, a, i, l), zS(null, t, a, !0, s, l);
    }
    function vx(e, t, a, i) {
      Fm(e, t);
      var l = t.pendingProps, s;
      {
        var f = xf(t, a, !1);
        s = kf(t, f);
      }
      Af(t, i);
      var p, h;
      ma(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var E = At(a) || "Unknown";
          OS[E] || (v("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", E, E), OS[E] = !0);
        }
        t.mode & Zt && uu.recordLegacyContextWarning(t, null), $n(!0), Fp.current = t, p = Vf(null, t, a, l, s, i), h = Hf(), $n(!1);
      }
      if (ya(), t.flags |= ri, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var C = At(a) || "Unknown";
        Pp[C] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", C, C, C), Pp[C] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var N = At(a) || "Unknown";
          Pp[N] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", N, N, N), Pp[N] = !0);
        }
        t.tag = k, t.memoizedState = null, t.updateQueue = null;
        var L = !1;
        return Wu(a) ? (L = !0, Gh(t)) : L = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Ug(t), DC(t, p), bS(t, a, l, i), zS(null, t, a, !0, L, i);
      } else {
        if (t.tag = O, t.mode & Zt) {
          yn(!0);
          try {
            p = Vf(null, t, a, l, s, i), h = Hf();
          } finally {
            yn(!1);
          }
        }
        return jr() && h && hg(t), _a(null, t, p, i), jS(t, a), t.child;
      }
    }
    function jS(e, t) {
      {
        if (t && t.childContextTypes && v("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Or();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), NS[l] || (NS[l] = !0, v("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = At(t) || "Unknown";
          Vp[f] || (v("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Vp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = At(t) || "Unknown";
          MS[p] || (v("%s: Function components do not support getDerivedStateFromProps.", p), MS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var h = At(t) || "Unknown";
          LS[h] || (v("%s: Function components do not support contextType.", h), LS[h] = !0);
        }
      }
    }
    var FS = {
      dehydrated: null,
      treeContext: null,
      retryLane: zt
    };
    function PS(e) {
      return {
        baseLanes: e,
        cachePool: ax(),
        transitions: null
      };
    }
    function hx(e, t) {
      var a = null;
      return {
        baseLanes: _t(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function mx(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return Vg(e, Dp);
    }
    function yx(e, t) {
      return xs(e.childLanes, t);
    }
    function $C(e, t, a) {
      var i = t.pendingProps;
      bk(t) && (t.flags |= Qe);
      var l = lu.current, s = !1, f = (t.flags & Qe) !== Ke;
      if (f || mx(l, e) ? (s = !0, t.flags &= ~Qe) : (e === null || e.memoizedState !== null) && (l = Ub(l, XE)), l = zf(l), Po(t, l), e === null) {
        _g(t);
        var p = t.memoizedState;
        if (p !== null) {
          var h = p.dehydrated;
          if (h !== null)
            return Cx(t, h);
        }
        var E = i.children, C = i.fallback;
        if (s) {
          var N = gx(t, E, C, a), L = t.child;
          return L.memoizedState = PS(a), t.memoizedState = FS, N;
        } else
          return VS(t, E);
      } else {
        var H = e.memoizedState;
        if (H !== null) {
          var $ = H.dehydrated;
          if ($ !== null)
            return Rx(e, t, f, i, $, H, a);
        }
        if (s) {
          var q = i.fallback, we = i.children, Je = _x(e, t, we, q, a), We = t.child, Nt = e.child.memoizedState;
          return We.memoizedState = Nt === null ? PS(a) : hx(Nt, a), We.childLanes = yx(e, a), t.memoizedState = FS, Je;
        } else {
          var kt = i.children, F = Sx(e, t, kt, a);
          return t.memoizedState = null, F;
        }
      }
    }
    function VS(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = HS(l, i);
      return s.return = e, e.child = s, s;
    }
    function gx(e, t, a, i) {
      var l = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, h;
      return (l & wt) === qe && s !== null ? (p = s, p.childLanes = ae, p.pendingProps = f, e.mode & Ft && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), h = Qo(a, l, i, null)) : (p = HS(f, l), h = Qo(a, l, i, null)), p.return = e, h.return = e, p.sibling = h, e.child = p, h;
    }
    function HS(e, t, a) {
      return Y0(e, t, ae, null);
    }
    function YC(e, t) {
      return oc(e, t);
    }
    function Sx(e, t, a, i) {
      var l = e.child, s = l.sibling, f = YC(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & wt) === qe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Oa) : p.push(s);
      }
      return t.child = f, f;
    }
    function _x(e, t, a, i, l) {
      var s = t.mode, f = e.child, p = f.sibling, h = {
        mode: "hidden",
        children: a
      }, E;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & wt) === qe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var C = t.child;
        E = C, E.childLanes = ae, E.pendingProps = h, t.mode & Ft && (E.actualDuration = 0, E.actualStartTime = -1, E.selfBaseDuration = f.selfBaseDuration, E.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        E = YC(f, h), E.subtreeFlags = f.subtreeFlags & An;
      var N;
      return p !== null ? N = oc(p, i) : (N = Qo(i, s, l, null), N.flags |= mn), N.return = t, E.return = t, E.sibling = N, t.child = E, N;
    }
    function jm(e, t, a, i) {
      i !== null && Eg(i), Mf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, f = VS(t, s);
      return f.flags |= mn, t.memoizedState = null, f;
    }
    function Ex(e, t, a, i, l) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = HS(f, s), h = Qo(i, s, l, null);
      return h.flags |= mn, p.return = t, h.return = t, p.sibling = h, t.child = p, (t.mode & wt) !== qe && Mf(t, e.child, null, l), h;
    }
    function Cx(e, t, a) {
      return (e.mode & wt) === qe ? (v("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ut) : ig(t) ? e.lanes = Rr : e.lanes = ea, null;
    }
    function Rx(e, t, a, i, l, s, f) {
      if (a)
        if (t.flags & Cr) {
          t.flags &= ~Cr;
          var F = xS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return jm(e, t, f, F);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Qe, null;
          var X = i.children, P = i.fallback, ce = Ex(e, t, X, P, f), Ae = t.child;
          return Ae.memoizedState = PS(f), t.memoizedState = FS, ce;
        }
      else {
        if (cb(), (t.mode & wt) === qe)
          return jm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (ig(l)) {
          var p, h, E;
          {
            var C = xw(l);
            p = C.digest, h = C.message, E = C.stack;
          }
          var N;
          h ? N = new Error(h) : N = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var L = xS(N, p, E);
          return jm(e, t, f, L);
        }
        var H = ta(f, e.childLanes);
        if (cu || H) {
          var $ = Gm();
          if ($ !== null) {
            var q = Id($, f);
            if (q !== zt && q !== s.retryLane) {
              s.retryLane = q;
              var we = tn;
              Va(e, q), gr($, e, q, we);
            }
          }
          o_();
          var Je = xS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return jm(e, t, f, Je);
        } else if (vE(l)) {
          t.flags |= Qe, t.child = e.child;
          var We = G1.bind(null, e);
          return kw(l, We), null;
        } else {
          pb(t, l, s.treeContext);
          var Nt = i.children, kt = VS(t, Nt);
          return kt.flags |= qr, kt;
        }
      }
    }
    function WC(e, t, a) {
      e.lanes = _t(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = _t(i.lanes, t)), Lg(e.return, t, a);
    }
    function Tx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === pe) {
          var l = i.memoizedState;
          l !== null && WC(i, a, e);
        } else if (i.tag === ct)
          WC(i, a, e);
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
    function wx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && hm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function bx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !AS[e])
        if (AS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              v('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              v('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              v('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          v('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function xx(e, t) {
      e !== void 0 && !zm[e] && (e !== "collapsed" && e !== "hidden" ? (zm[e] = !0, v('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (zm[e] = !0, v('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function QC(e, t) {
      {
        var a = Rt(e), i = !a && typeof St(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return v("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function kx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Rt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!QC(e[a], a))
              return;
        } else {
          var i = St(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), f = 0; !s.done; s = l.next()) {
                if (!QC(s.value, f))
                  return;
                f++;
              }
          } else
            v('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function BS(e, t, a, i, l) {
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
    function GC(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, f = i.children;
      bx(l), xx(s, l), kx(f, l), _a(e, t, f, a);
      var p = lu.current, h = Vg(p, Dp);
      if (h)
        p = Hg(p, Dp), t.flags |= Qe;
      else {
        var E = e !== null && (e.flags & Qe) !== Ke;
        E && Tx(t, t.child, a), p = zf(p);
      }
      if (Po(t, p), (t.mode & wt) === qe)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var C = wx(t.child), N;
            C === null ? (N = t.child, t.child = null) : (N = C.sibling, C.sibling = null), BS(
              t,
              !1,
              // isBackwards
              N,
              C,
              s
            );
            break;
          }
          case "backwards": {
            var L = null, H = t.child;
            for (t.child = null; H !== null; ) {
              var $ = H.alternate;
              if ($ !== null && hm($) === null) {
                t.child = H;
                break;
              }
              var q = H.sibling;
              H.sibling = L, L = H, H = q;
            }
            BS(
              t,
              !0,
              // isBackwards
              L,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            BS(
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
    function Dx(e, t, a) {
      jg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Mf(t, null, i, a) : _a(e, t, i, a), t.child;
    }
    var KC = !1;
    function Ox(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || KC || (KC = !0, v("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var h = t.type.propTypes;
        h && au(h, s, "prop", "Context.Provider");
      }
      if (HE(t, l, p), f !== null) {
        var E = f.value;
        if (oe(E, p)) {
          if (f.children === s.children && !Wh())
            return Il(e, t, a);
        } else
          bb(t, l, a);
      }
      var C = s.children;
      return _a(e, t, C, a), t.child;
    }
    var qC = !1;
    function Lx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (qC || (qC = !0, v("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && v("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Af(t, a);
      var f = nr(i);
      ma(t);
      var p;
      return Fp.current = t, $n(!0), p = s(f), $n(!1), ya(), t.flags |= ri, _a(e, t, p, a), t.child;
    }
    function Hp() {
      cu = !0;
    }
    function Fm(e, t) {
      (t.mode & wt) === qe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= mn);
    }
    function Il(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), wC(), Jp(t.lanes), ta(a, t.childLanes) ? (Tb(e, t), t.child) : null;
    }
    function Mx(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Oa) : s.push(e), a.flags |= mn, a;
      }
    }
    function IS(e, t) {
      var a = e.lanes;
      return !!ta(a, t);
    }
    function Nx(e, t, a) {
      switch (t.tag) {
        case W:
          BC(t), t.stateNode, Lf();
          break;
        case Z:
          KE(t);
          break;
        case k: {
          var i = t.type;
          Wu(i) && Gh(t);
          break;
        }
        case J:
          jg(t, t.stateNode.containerInfo);
          break;
        case Me: {
          var l = t.memoizedProps.value, s = t.type._context;
          HE(t, s, l);
          break;
        }
        case De:
          {
            var f = ta(a, t.childLanes);
            f && (t.flags |= Ot);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case pe: {
          var h = t.memoizedState;
          if (h !== null) {
            if (h.dehydrated !== null)
              return Po(t, zf(lu.current)), t.flags |= Qe, null;
            var E = t.child, C = E.childLanes;
            if (ta(a, C))
              return $C(e, t, a);
            Po(t, zf(lu.current));
            var N = Il(e, t, a);
            return N !== null ? N.sibling : null;
          } else
            Po(t, zf(lu.current));
          break;
        }
        case ct: {
          var L = (e.flags & Qe) !== Ke, H = ta(a, t.childLanes);
          if (L) {
            if (H)
              return GC(e, t, a);
            t.flags |= Qe;
          }
          var $ = t.memoizedState;
          if ($ !== null && ($.rendering = null, $.tail = null, $.lastEffect = null), Po(t, lu.current), H)
            break;
          return null;
        }
        case ee:
        case Se:
          return t.lanes = ae, PC(e, t, a);
      }
      return Il(e, t, a);
    }
    function XC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Mx(e, t, S_(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || Wh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          cu = !0;
        else {
          var s = IS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Qe) === Ke)
            return cu = !1, Nx(e, t, a);
          (e.flags & Dc) !== Ke ? cu = !0 : cu = !1;
        }
      } else if (cu = !1, jr() && ab(t)) {
        var f = t.index, p = ib();
        wE(t, p, f);
      }
      switch (t.lanes = ae, t.tag) {
        case Y:
          return vx(e, t, t.type, a);
        case $e: {
          var h = t.elementType;
          return dx(e, t, h, a);
        }
        case O: {
          var E = t.type, C = t.pendingProps, N = t.elementType === E ? C : su(E, C);
          return US(e, t, E, N, a);
        }
        case k: {
          var L = t.type, H = t.pendingProps, $ = t.elementType === L ? H : su(L, H);
          return HC(e, t, L, $, a);
        }
        case W:
          return sx(e, t, a);
        case Z:
          return cx(e, t, a);
        case ve:
          return fx(e, t);
        case pe:
          return $C(e, t, a);
        case J:
          return Dx(e, t, a);
        case Ee: {
          var q = t.type, we = t.pendingProps, Je = t.elementType === q ? we : su(q, we);
          return zC(e, t, q, Je, a);
        }
        case he:
          return ux(e, t, a);
        case Fe:
          return lx(e, t, a);
        case De:
          return ox(e, t, a);
        case Me:
          return Ox(e, t, a);
        case ot:
          return Lx(e, t, a);
        case et: {
          var We = t.type, Nt = t.pendingProps, kt = su(We, Nt);
          if (t.type !== t.elementType) {
            var F = We.propTypes;
            F && au(
              F,
              kt,
              // Resolved for outer only
              "prop",
              At(We)
            );
          }
          return kt = su(We.type, kt), jC(e, t, We, kt, a);
        }
        case Be:
          return FC(e, t, t.type, t.pendingProps, a);
        case at: {
          var X = t.type, P = t.pendingProps, ce = t.elementType === X ? P : su(X, P);
          return px(e, t, X, ce, a);
        }
        case ct:
          return GC(e, t, a);
        case K:
          break;
        case ee:
          return PC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Bf(e) {
      e.flags |= Ot;
    }
    function ZC(e) {
      e.flags |= _n, e.flags |= go;
    }
    var JC, $S, e0, t0;
    JC = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === Z || l.tag === ve)
          tw(e, l.stateNode);
        else if (l.tag !== J) {
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
    }, $S = function(e, t) {
    }, e0 = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Fg(), h = rw(f, a, s, i, l, p);
        t.updateQueue = h, h && Bf(t);
      }
    }, t0 = function(e, t, a, i) {
      a !== i && Bf(t);
    };
    function Bp(e, t) {
      if (!jr())
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
    function Pr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ae, i = Ke;
      if (t) {
        if ((e.mode & Ft) !== qe) {
          for (var h = e.selfBaseDuration, E = e.child; E !== null; )
            a = _t(a, _t(E.lanes, E.childLanes)), i |= E.subtreeFlags & An, i |= E.flags & An, h += E.treeBaseDuration, E = E.sibling;
          e.treeBaseDuration = h;
        } else
          for (var C = e.child; C !== null; )
            a = _t(a, _t(C.lanes, C.childLanes)), i |= C.subtreeFlags & An, i |= C.flags & An, C.return = e, C = C.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ft) !== qe) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = _t(a, _t(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, l += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = _t(a, _t(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Ax(e, t, a) {
      if (gb() && (t.mode & wt) !== qe && (t.flags & Qe) === Ke)
        return ME(t), Lf(), t.flags |= Cr | fs | Zn, !1;
      var i = Jh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (mb(t), Pr(t), (t.mode & Ft) !== qe) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Lf(), (t.flags & Qe) === Ke && (t.memoizedState = null), t.flags |= Ot, Pr(t), (t.mode & Ft) !== qe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return NE(), !0;
    }
    function n0(e, t, a) {
      var i = t.pendingProps;
      switch (mg(t), t.tag) {
        case Y:
        case $e:
        case Be:
        case O:
        case Ee:
        case he:
        case Fe:
        case De:
        case ot:
        case et:
          return Pr(t), null;
        case k: {
          var l = t.type;
          return Wu(l) && Qh(t), Pr(t), null;
        }
        case W: {
          var s = t.stateNode;
          if (Uf(t), dg(t), Ig(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Jh(t);
            if (f)
              Bf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Cr) !== Ke) && (t.flags |= Yn, NE());
            }
          }
          return $S(e, t), Pr(t), null;
        }
        case Z: {
          Pg(t);
          var h = GE(), E = t.type;
          if (e !== null && t.stateNode != null)
            e0(e, t, E, i, h), e.ref !== t.ref && ZC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Pr(t), null;
            }
            var C = Fg(), N = Jh(t);
            if (N)
              vb(t, h, C) && Bf(t);
            else {
              var L = ew(E, i, h, C, t);
              JC(L, t, !1, !1), t.stateNode = L, nw(L, E, i, h) && Bf(t);
            }
            t.ref !== null && ZC(t);
          }
          return Pr(t), null;
        }
        case ve: {
          var H = i;
          if (e && t.stateNode != null) {
            var $ = e.memoizedProps;
            t0(e, t, $, H);
          } else {
            if (typeof H != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var q = GE(), we = Fg(), Je = Jh(t);
            Je ? hb(t) && Bf(t) : t.stateNode = aw(H, q, we, t);
          }
          return Pr(t), null;
        }
        case pe: {
          jf(t);
          var We = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Nt = Ax(e, t, We);
            if (!Nt)
              return t.flags & Zn ? t : null;
          }
          if ((t.flags & Qe) !== Ke)
            return t.lanes = a, (t.mode & Ft) !== qe && vS(t), t;
          var kt = We !== null, F = e !== null && e.memoizedState !== null;
          if (kt !== F && kt) {
            var X = t.child;
            if (X.flags |= Nn, (t.mode & wt) !== qe) {
              var P = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              P || Vg(lu.current, XE) ? U1() : o_();
            }
          }
          var ce = t.updateQueue;
          if (ce !== null && (t.flags |= Ot), Pr(t), (t.mode & Ft) !== qe && kt) {
            var Ae = t.child;
            Ae !== null && (t.treeBaseDuration -= Ae.treeBaseDuration);
          }
          return null;
        }
        case J:
          return Uf(t), $S(e, t), e === null && Xw(t.stateNode.containerInfo), Pr(t), null;
        case Me:
          var ke = t.type._context;
          return Og(ke, t), Pr(t), null;
        case at: {
          var lt = t.type;
          return Wu(lt) && Qh(t), Pr(t), null;
        }
        case ct: {
          jf(t);
          var yt = t.memoizedState;
          if (yt === null)
            return Pr(t), null;
          var en = (t.flags & Qe) !== Ke, Ht = yt.rendering;
          if (Ht === null)
            if (en)
              Bp(yt, !1);
            else {
              var Gn = j1() && (e === null || (e.flags & Qe) === Ke);
              if (!Gn)
                for (var Bt = t.child; Bt !== null; ) {
                  var Vn = hm(Bt);
                  if (Vn !== null) {
                    en = !0, t.flags |= Qe, Bp(yt, !1);
                    var oa = Vn.updateQueue;
                    return oa !== null && (t.updateQueue = oa, t.flags |= Ot), t.subtreeFlags = Ke, wb(t, a), Po(t, Hg(lu.current, Dp)), t.child;
                  }
                  Bt = Bt.sibling;
                }
              yt.tail !== null && Wn() > R0() && (t.flags |= Qe, en = !0, Bp(yt, !1), t.lanes = Ad);
            }
          else {
            if (!en) {
              var $r = hm(Ht);
              if ($r !== null) {
                t.flags |= Qe, en = !0;
                var ci = $r.updateQueue;
                if (ci !== null && (t.updateQueue = ci, t.flags |= Ot), Bp(yt, !0), yt.tail === null && yt.tailMode === "hidden" && !Ht.alternate && !jr())
                  return Pr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Wn() * 2 - yt.renderingStartTime > R0() && a !== ea && (t.flags |= Qe, en = !0, Bp(yt, !1), t.lanes = Ad);
            }
            if (yt.isBackwards)
              Ht.sibling = t.child, t.child = Ht;
            else {
              var Ra = yt.last;
              Ra !== null ? Ra.sibling = Ht : t.child = Ht, yt.last = Ht;
            }
          }
          if (yt.tail !== null) {
            var Ta = yt.tail;
            yt.rendering = Ta, yt.tail = Ta.sibling, yt.renderingStartTime = Wn(), Ta.sibling = null;
            var sa = lu.current;
            return en ? sa = Hg(sa, Dp) : sa = zf(sa), Po(t, sa), Ta;
          }
          return Pr(t), null;
        }
        case K:
          break;
        case ee:
        case Se: {
          l_(t);
          var Gl = t.memoizedState, qf = Gl !== null;
          if (e !== null) {
            var av = e.memoizedState, el = av !== null;
            el !== qf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !fe && (t.flags |= Nn);
          }
          return !qf || (t.mode & wt) === qe ? Pr(t) : ta(Ju, ea) && (Pr(t), t.subtreeFlags & (mn | Ot) && (t.flags |= Nn)), null;
        }
        case je:
          return null;
        case Re:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ux(e, t, a) {
      switch (mg(t), t.tag) {
        case k: {
          var i = t.type;
          Wu(i) && Qh(t);
          var l = t.flags;
          return l & Zn ? (t.flags = l & ~Zn | Qe, (t.mode & Ft) !== qe && vS(t), t) : null;
        }
        case W: {
          t.stateNode, Uf(t), dg(t), Ig();
          var s = t.flags;
          return (s & Zn) !== Ke && (s & Qe) === Ke ? (t.flags = s & ~Zn | Qe, t) : null;
        }
        case Z:
          return Pg(t), null;
        case pe: {
          jf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Lf();
          }
          var p = t.flags;
          return p & Zn ? (t.flags = p & ~Zn | Qe, (t.mode & Ft) !== qe && vS(t), t) : null;
        }
        case ct:
          return jf(t), null;
        case J:
          return Uf(t), null;
        case Me:
          var h = t.type._context;
          return Og(h, t), null;
        case ee:
        case Se:
          return l_(t), null;
        case je:
          return null;
        default:
          return null;
      }
    }
    function r0(e, t, a) {
      switch (mg(t), t.tag) {
        case k: {
          var i = t.type.childContextTypes;
          i != null && Qh(t);
          break;
        }
        case W: {
          t.stateNode, Uf(t), dg(t), Ig();
          break;
        }
        case Z: {
          Pg(t);
          break;
        }
        case J:
          Uf(t);
          break;
        case pe:
          jf(t);
          break;
        case ct:
          jf(t);
          break;
        case Me:
          var l = t.type._context;
          Og(l, t);
          break;
        case ee:
        case Se:
          l_(t);
          break;
      }
    }
    var a0 = null;
    a0 = /* @__PURE__ */ new Set();
    var Pm = !1, Vr = !1, zx = typeof WeakSet == "function" ? WeakSet : Set, He = null, If = null, $f = null;
    function jx(e) {
      ku(null, function() {
        throw e;
      }), cs();
    }
    var Fx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ft)
        try {
          Xu(), t.componentWillUnmount();
        } finally {
          qu(e);
        }
      else
        t.componentWillUnmount();
    };
    function i0(e, t) {
      try {
        Bo(dr, e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function YS(e, t, a) {
      try {
        Fx(e, a);
      } catch (i) {
        fn(e, t, i);
      }
    }
    function Px(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        fn(e, t, i);
      }
    }
    function u0(e, t) {
      try {
        o0(e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function Yf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ne && vt && e.mode & Ft)
              try {
                Xu(), i = a(null);
              } finally {
                qu(e);
              }
            else
              i = a(null);
          } catch (l) {
            fn(e, t, l);
          }
          typeof i == "function" && v("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", pt(e));
        } else
          a.current = null;
    }
    function Vm(e, t, a) {
      try {
        a();
      } catch (i) {
        fn(e, t, i);
      }
    }
    var l0 = !1;
    function Vx(e, t) {
      ZT(e.containerInfo), He = t, Hx();
      var a = l0;
      return l0 = !1, a;
    }
    function Hx() {
      for (; He !== null; ) {
        var e = He, t = e.child;
        (e.subtreeFlags & Ou) !== Ke && t !== null ? (t.return = e, He = t) : Bx();
      }
    }
    function Bx() {
      for (; He !== null; ) {
        var e = He;
        Kt(e);
        try {
          Ix(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, He = t;
          return;
        }
        He = e.return;
      }
    }
    function Ix(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Yn) !== Ke) {
        switch (Kt(e), e.tag) {
          case O:
          case Ee:
          case Be:
            break;
          case k: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !rc && (s.props !== e.memoizedProps && v("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(e) || "instance"), s.state !== e.memoizedState && v("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : su(e.type, i), l);
              {
                var p = a0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), v("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", pt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case W: {
            {
              var h = e.stateNode;
              Rw(h.containerInfo);
            }
            break;
          }
          case Z:
          case ve:
          case J:
          case at:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        cn();
      }
    }
    function fu(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== Ha ? Zi(t) : (e & dr) !== Ha && ps(t), (e & Qu) !== Ha && tv(!0), Vm(t, a, p), (e & Qu) !== Ha && tv(!1), (e & Fr) !== Ha ? Au() : (e & dr) !== Ha && Md());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Bo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Fr) !== Ha ? Ld(t) : (e & dr) !== Ha && Uc(t);
            var f = s.create;
            (e & Qu) !== Ha && tv(!0), s.destroy = f(), (e & Qu) !== Ha && tv(!1), (e & Fr) !== Ha ? Yv() : (e & dr) !== Ha && Wv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var h = void 0;
                (s.tag & dr) !== Ke ? h = "useLayoutEffect" : (s.tag & Qu) !== Ke ? h = "useInsertionEffect" : h = "useEffect";
                var E = void 0;
                p === null ? E = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? E = `

It looks like you wrote ` + h + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + h + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : E = " You returned: " + p, v("%s must not return anything besides a function, which is used for clean-up.%s", h, E);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function $x(e, t) {
      if ((t.flags & Ot) !== Ke)
        switch (t.tag) {
          case De: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, f = RC(), p = t.alternate === null ? "mount" : "update";
            CC() && (p = "nested-update"), typeof s == "function" && s(l, p, a, f);
            var h = t.return;
            e: for (; h !== null; ) {
              switch (h.tag) {
                case W:
                  var E = h.stateNode;
                  E.passiveEffectDuration += a;
                  break e;
                case De:
                  var C = h.stateNode;
                  C.passiveEffectDuration += a;
                  break e;
              }
              h = h.return;
            }
            break;
          }
        }
    }
    function Yx(e, t, a, i) {
      if ((a.flags & Mu) !== Ke)
        switch (a.tag) {
          case O:
          case Ee:
          case Be: {
            if (!Vr)
              if (a.mode & Ft)
                try {
                  Xu(), Bo(dr | fr, a);
                } finally {
                  qu(a);
                }
              else
                Bo(dr | fr, a);
            break;
          }
          case k: {
            var l = a.stateNode;
            if (a.flags & Ot && !Vr)
              if (t === null)
                if (a.type === a.elementType && !rc && (l.props !== a.memoizedProps && v("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(a) || "instance"), l.state !== a.memoizedState && v("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(a) || "instance")), a.mode & Ft)
                  try {
                    Xu(), l.componentDidMount();
                  } finally {
                    qu(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : su(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !rc && (l.props !== a.memoizedProps && v("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(a) || "instance"), l.state !== a.memoizedState && v("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(a) || "instance")), a.mode & Ft)
                  try {
                    Xu(), l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    qu(a);
                  }
                else
                  l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !rc && (l.props !== a.memoizedProps && v("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(a) || "instance"), l.state !== a.memoizedState && v("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(a) || "instance")), QE(a, p, l));
            break;
          }
          case W: {
            var h = a.updateQueue;
            if (h !== null) {
              var E = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Z:
                    E = a.child.stateNode;
                    break;
                  case k:
                    E = a.child.stateNode;
                    break;
                }
              QE(a, h, E);
            }
            break;
          }
          case Z: {
            var C = a.stateNode;
            if (t === null && a.flags & Ot) {
              var N = a.type, L = a.memoizedProps;
              sw(C, N, L);
            }
            break;
          }
          case ve:
            break;
          case J:
            break;
          case De: {
            {
              var H = a.memoizedProps, $ = H.onCommit, q = H.onRender, we = a.stateNode.effectDuration, Je = RC(), We = t === null ? "mount" : "update";
              CC() && (We = "nested-update"), typeof q == "function" && q(a.memoizedProps.id, We, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Je);
              {
                typeof $ == "function" && $(a.memoizedProps.id, We, we, Je), B1(a);
                var Nt = a.return;
                e: for (; Nt !== null; ) {
                  switch (Nt.tag) {
                    case W:
                      var kt = Nt.stateNode;
                      kt.effectDuration += we;
                      break e;
                    case De:
                      var F = Nt.stateNode;
                      F.effectDuration += we;
                      break e;
                  }
                  Nt = Nt.return;
                }
              }
            }
            break;
          }
          case pe: {
            Jx(e, a);
            break;
          }
          case ct:
          case at:
          case K:
          case ee:
          case Se:
          case Re:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Vr || a.flags & _n && o0(a);
    }
    function Wx(e) {
      switch (e.tag) {
        case O:
        case Ee:
        case Be: {
          if (e.mode & Ft)
            try {
              Xu(), i0(e, e.return);
            } finally {
              qu(e);
            }
          else
            i0(e, e.return);
          break;
        }
        case k: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Px(e, e.return, t), u0(e, e.return);
          break;
        }
        case Z: {
          u0(e, e.return);
          break;
        }
      }
    }
    function Qx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Z) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? Sw(l) : Ew(i.stateNode, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
          }
        } else if (i.tag === ve) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? _w(s) : Cw(s, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
        } else if (!((i.tag === ee || i.tag === Se) && i.memoizedState !== null && i !== e)) {
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
    function o0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        if (e.tag === Z ? i = a : i = a, typeof t == "function") {
          var l;
          if (e.mode & Ft)
            try {
              Xu(), l = t(i);
            } finally {
              qu(e);
            }
          else
            l = t(i);
          typeof l == "function" && v("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", pt(e));
        } else
          t.hasOwnProperty("current") || v("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", pt(e)), t.current = i;
      }
    }
    function Gx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function s0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, s0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Z) {
          var a = e.stateNode;
          a !== null && eb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Kx(e) {
      for (var t = e.return; t !== null; ) {
        if (c0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function c0(e) {
      return e.tag === Z || e.tag === W || e.tag === J;
    }
    function f0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || c0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== Z && t.tag !== ve && t.tag !== st; ) {
          if (t.flags & mn || t.child === null || t.tag === J)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & mn))
          return t.stateNode;
      }
    }
    function qx(e) {
      var t = Kx(e);
      switch (t.tag) {
        case Z: {
          var a = t.stateNode;
          t.flags & La && (pE(a), t.flags &= ~La);
          var i = f0(e);
          QS(e, i, a);
          break;
        }
        case W:
        case J: {
          var l = t.stateNode.containerInfo, s = f0(e);
          WS(e, s, l);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function WS(e, t, a) {
      var i = e.tag, l = i === Z || i === ve;
      if (l) {
        var s = e.stateNode;
        t ? hw(a, s, t) : pw(a, s);
      } else if (i !== J) {
        var f = e.child;
        if (f !== null) {
          WS(f, t, a);
          for (var p = f.sibling; p !== null; )
            WS(p, t, a), p = p.sibling;
        }
      }
    }
    function QS(e, t, a) {
      var i = e.tag, l = i === Z || i === ve;
      if (l) {
        var s = e.stateNode;
        t ? vw(a, s, t) : dw(a, s);
      } else if (i !== J) {
        var f = e.child;
        if (f !== null) {
          QS(f, t, a);
          for (var p = f.sibling; p !== null; )
            QS(p, t, a), p = p.sibling;
        }
      }
    }
    var Hr = null, du = !1;
    function Xx(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case Z: {
              Hr = i.stateNode, du = !1;
              break e;
            }
            case W: {
              Hr = i.stateNode.containerInfo, du = !0;
              break e;
            }
            case J: {
              Hr = i.stateNode.containerInfo, du = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Hr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        d0(e, t, a), Hr = null, du = !1;
      }
      Gx(a);
    }
    function Io(e, t, a) {
      for (var i = a.child; i !== null; )
        d0(e, t, i), i = i.sibling;
    }
    function d0(e, t, a) {
      switch (kd(a), a.tag) {
        case Z:
          Vr || Yf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case ve: {
          {
            var i = Hr, l = du;
            Hr = null, Io(e, t, a), Hr = i, du = l, Hr !== null && (du ? yw(Hr, a.stateNode) : mw(Hr, a.stateNode));
          }
          return;
        }
        case st: {
          Hr !== null && (du ? gw(Hr, a.stateNode) : ag(Hr, a.stateNode));
          return;
        }
        case J: {
          {
            var s = Hr, f = du;
            Hr = a.stateNode.containerInfo, du = !0, Io(e, t, a), Hr = s, du = f;
          }
          return;
        }
        case O:
        case Ee:
        case et:
        case Be: {
          if (!Vr) {
            var p = a.updateQueue;
            if (p !== null) {
              var h = p.lastEffect;
              if (h !== null) {
                var E = h.next, C = E;
                do {
                  var N = C, L = N.destroy, H = N.tag;
                  L !== void 0 && ((H & Qu) !== Ha ? Vm(a, t, L) : (H & dr) !== Ha && (ps(a), a.mode & Ft ? (Xu(), Vm(a, t, L), qu(a)) : Vm(a, t, L), Md())), C = C.next;
                } while (C !== E);
              }
            }
          }
          Io(e, t, a);
          return;
        }
        case k: {
          if (!Vr) {
            Yf(a, t);
            var $ = a.stateNode;
            typeof $.componentWillUnmount == "function" && YS(a, t, $);
          }
          Io(e, t, a);
          return;
        }
        case K: {
          Io(e, t, a);
          return;
        }
        case ee: {
          if (
            // TODO: Remove this dead flag
            a.mode & wt
          ) {
            var q = Vr;
            Vr = q || a.memoizedState !== null, Io(e, t, a), Vr = q;
          } else
            Io(e, t, a);
          break;
        }
        default: {
          Io(e, t, a);
          return;
        }
      }
    }
    function Zx(e) {
      e.memoizedState;
    }
    function Jx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && jw(s);
          }
        }
      }
    }
    function p0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new zx()), t.forEach(function(i) {
          var l = K1.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Jr)
              if (If !== null && $f !== null)
                ev($f, If);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function e1(e, t, a) {
      If = a, $f = e, Kt(t), v0(t, e), Kt(t), If = null, $f = null;
    }
    function pu(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            Xx(e, t, s);
          } catch (h) {
            fn(s, t, h);
          }
        }
      var f = Eu();
      if (t.subtreeFlags & Lu)
        for (var p = t.child; p !== null; )
          Kt(p), v0(p, e), p = p.sibling;
      Kt(f);
    }
    function v0(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case O:
        case Ee:
        case et:
        case Be: {
          if (pu(t, e), Zu(e), l & Ot) {
            try {
              fu(Qu | fr, e, e.return), Bo(Qu | fr, e);
            } catch (lt) {
              fn(e, e.return, lt);
            }
            if (e.mode & Ft) {
              try {
                Xu(), fu(dr | fr, e, e.return);
              } catch (lt) {
                fn(e, e.return, lt);
              }
              qu(e);
            } else
              try {
                fu(dr | fr, e, e.return);
              } catch (lt) {
                fn(e, e.return, lt);
              }
          }
          return;
        }
        case k: {
          pu(t, e), Zu(e), l & _n && i !== null && Yf(i, i.return);
          return;
        }
        case Z: {
          pu(t, e), Zu(e), l & _n && i !== null && Yf(i, i.return);
          {
            if (e.flags & La) {
              var s = e.stateNode;
              try {
                pE(s);
              } catch (lt) {
                fn(e, e.return, lt);
              }
            }
            if (l & Ot) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, h = i !== null ? i.memoizedProps : p, E = e.type, C = e.updateQueue;
                if (e.updateQueue = null, C !== null)
                  try {
                    cw(f, C, E, h, p, e);
                  } catch (lt) {
                    fn(e, e.return, lt);
                  }
              }
            }
          }
          return;
        }
        case ve: {
          if (pu(t, e), Zu(e), l & Ot) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var N = e.stateNode, L = e.memoizedProps, H = i !== null ? i.memoizedProps : L;
            try {
              fw(N, H, L);
            } catch (lt) {
              fn(e, e.return, lt);
            }
          }
          return;
        }
        case W: {
          if (pu(t, e), Zu(e), l & Ot && i !== null) {
            var $ = i.memoizedState;
            if ($.isDehydrated)
              try {
                zw(t.containerInfo);
              } catch (lt) {
                fn(e, e.return, lt);
              }
          }
          return;
        }
        case J: {
          pu(t, e), Zu(e);
          return;
        }
        case pe: {
          pu(t, e), Zu(e);
          var q = e.child;
          if (q.flags & Nn) {
            var we = q.stateNode, Je = q.memoizedState, We = Je !== null;
            if (we.isHidden = We, We) {
              var Nt = q.alternate !== null && q.alternate.memoizedState !== null;
              Nt || A1();
            }
          }
          if (l & Ot) {
            try {
              Zx(e);
            } catch (lt) {
              fn(e, e.return, lt);
            }
            p0(e);
          }
          return;
        }
        case ee: {
          var kt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & wt
          ) {
            var F = Vr;
            Vr = F || kt, pu(t, e), Vr = F;
          } else
            pu(t, e);
          if (Zu(e), l & Nn) {
            var X = e.stateNode, P = e.memoizedState, ce = P !== null, Ae = e;
            if (X.isHidden = ce, ce && !kt && (Ae.mode & wt) !== qe) {
              He = Ae;
              for (var ke = Ae.child; ke !== null; )
                He = ke, n1(ke), ke = ke.sibling;
            }
            Qx(Ae, ce);
          }
          return;
        }
        case ct: {
          pu(t, e), Zu(e), l & Ot && p0(e);
          return;
        }
        case K:
          return;
        default: {
          pu(t, e), Zu(e);
          return;
        }
      }
    }
    function Zu(e) {
      var t = e.flags;
      if (t & mn) {
        try {
          qx(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        e.flags &= ~mn;
      }
      t & qr && (e.flags &= ~qr);
    }
    function t1(e, t, a) {
      If = a, $f = t, He = e, h0(e, t, a), If = null, $f = null;
    }
    function h0(e, t, a) {
      for (var i = (e.mode & wt) !== qe; He !== null; ) {
        var l = He, s = l.child;
        if (l.tag === ee && i) {
          var f = l.memoizedState !== null, p = f || Pm;
          if (p) {
            GS(e, t, a);
            continue;
          } else {
            var h = l.alternate, E = h !== null && h.memoizedState !== null, C = E || Vr, N = Pm, L = Vr;
            Pm = p, Vr = C, Vr && !L && (He = l, r1(l));
            for (var H = s; H !== null; )
              He = H, h0(
                H,
                // New root; bubble back up to here and stop.
                t,
                a
              ), H = H.sibling;
            He = l, Pm = N, Vr = L, GS(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & Mu) !== Ke && s !== null ? (s.return = l, He = s) : GS(e, t, a);
      }
    }
    function GS(e, t, a) {
      for (; He !== null; ) {
        var i = He;
        if ((i.flags & Mu) !== Ke) {
          var l = i.alternate;
          Kt(i);
          try {
            Yx(t, l, i, a);
          } catch (f) {
            fn(i, i.return, f);
          }
          cn();
        }
        if (i === e) {
          He = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, He = s;
          return;
        }
        He = i.return;
      }
    }
    function n1(e) {
      for (; He !== null; ) {
        var t = He, a = t.child;
        switch (t.tag) {
          case O:
          case Ee:
          case et:
          case Be: {
            if (t.mode & Ft)
              try {
                Xu(), fu(dr, t, t.return);
              } finally {
                qu(t);
              }
            else
              fu(dr, t, t.return);
            break;
          }
          case k: {
            Yf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && YS(t, t.return, i);
            break;
          }
          case Z: {
            Yf(t, t.return);
            break;
          }
          case ee: {
            var l = t.memoizedState !== null;
            if (l) {
              m0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, He = a) : m0(e);
      }
    }
    function m0(e) {
      for (; He !== null; ) {
        var t = He;
        if (t === e) {
          He = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, He = a;
          return;
        }
        He = t.return;
      }
    }
    function r1(e) {
      for (; He !== null; ) {
        var t = He, a = t.child;
        if (t.tag === ee) {
          var i = t.memoizedState !== null;
          if (i) {
            y0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, He = a) : y0(e);
      }
    }
    function y0(e) {
      for (; He !== null; ) {
        var t = He;
        Kt(t);
        try {
          Wx(t);
        } catch (i) {
          fn(t, t.return, i);
        }
        if (cn(), t === e) {
          He = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, He = a;
          return;
        }
        He = t.return;
      }
    }
    function a1(e, t, a, i) {
      He = t, i1(t, e, a, i);
    }
    function i1(e, t, a, i) {
      for (; He !== null; ) {
        var l = He, s = l.child;
        (l.subtreeFlags & qi) !== Ke && s !== null ? (s.return = l, He = s) : u1(e, t, a, i);
      }
    }
    function u1(e, t, a, i) {
      for (; He !== null; ) {
        var l = He;
        if ((l.flags & Kr) !== Ke) {
          Kt(l);
          try {
            l1(t, l, a, i);
          } catch (f) {
            fn(l, l.return, f);
          }
          cn();
        }
        if (l === e) {
          He = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, He = s;
          return;
        }
        He = l.return;
      }
    }
    function l1(e, t, a, i) {
      switch (t.tag) {
        case O:
        case Ee:
        case Be: {
          if (t.mode & Ft) {
            pS();
            try {
              Bo(Fr | fr, t);
            } finally {
              dS(t);
            }
          } else
            Bo(Fr | fr, t);
          break;
        }
      }
    }
    function o1(e) {
      He = e, s1();
    }
    function s1() {
      for (; He !== null; ) {
        var e = He, t = e.child;
        if ((He.flags & Oa) !== Ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              He = l, d1(l, e);
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
            He = e;
          }
        }
        (e.subtreeFlags & qi) !== Ke && t !== null ? (t.return = e, He = t) : c1();
      }
    }
    function c1() {
      for (; He !== null; ) {
        var e = He;
        (e.flags & Kr) !== Ke && (Kt(e), f1(e), cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, He = t;
          return;
        }
        He = e.return;
      }
    }
    function f1(e) {
      switch (e.tag) {
        case O:
        case Ee:
        case Be: {
          e.mode & Ft ? (pS(), fu(Fr | fr, e, e.return), dS(e)) : fu(Fr | fr, e, e.return);
          break;
        }
      }
    }
    function d1(e, t) {
      for (; He !== null; ) {
        var a = He;
        Kt(a), v1(a, t), cn();
        var i = a.child;
        i !== null ? (i.return = a, He = i) : p1(e);
      }
    }
    function p1(e) {
      for (; He !== null; ) {
        var t = He, a = t.sibling, i = t.return;
        if (s0(t), t === e) {
          He = null;
          return;
        }
        if (a !== null) {
          a.return = i, He = a;
          return;
        }
        He = i;
      }
    }
    function v1(e, t) {
      switch (e.tag) {
        case O:
        case Ee:
        case Be: {
          e.mode & Ft ? (pS(), fu(Fr, e, t), dS(e)) : fu(Fr, e, t);
          break;
        }
      }
    }
    function h1(e) {
      switch (e.tag) {
        case O:
        case Ee:
        case Be: {
          try {
            Bo(dr | fr, e);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case k: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
      }
    }
    function m1(e) {
      switch (e.tag) {
        case O:
        case Ee:
        case Be: {
          try {
            Bo(Fr | fr, e);
          } catch (t) {
            fn(e, e.return, t);
          }
          break;
        }
      }
    }
    function y1(e) {
      switch (e.tag) {
        case O:
        case Ee:
        case Be: {
          try {
            fu(dr | fr, e, e.return);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case k: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && YS(e, e.return, t);
          break;
        }
      }
    }
    function g1(e) {
      switch (e.tag) {
        case O:
        case Ee:
        case Be:
          try {
            fu(Fr | fr, e, e.return);
          } catch (t) {
            fn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Ip = Symbol.for;
      Ip("selector.component"), Ip("selector.has_pseudo_class"), Ip("selector.role"), Ip("selector.test_id"), Ip("selector.text");
    }
    var S1 = [];
    function _1() {
      S1.forEach(function(e) {
        return e();
      });
    }
    var E1 = m.ReactCurrentActQueue;
    function C1(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function g0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && E1.current !== null && v("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var R1 = Math.ceil, KS = m.ReactCurrentDispatcher, qS = m.ReactCurrentOwner, Br = m.ReactCurrentBatchConfig, vu = m.ReactCurrentActQueue, hr = (
      /*             */
      0
    ), S0 = (
      /*               */
      1
    ), Ir = (
      /*                */
      2
    ), Fi = (
      /*                */
      4
    ), $l = 0, $p = 1, ac = 2, Hm = 3, Yp = 4, _0 = 5, XS = 6, Mt = hr, Ea = null, Dn = null, mr = ae, Ju = ae, ZS = No(ae), yr = $l, Wp = null, Bm = ae, Qp = ae, Im = ae, Gp = null, Ba = null, JS = 0, E0 = 500, C0 = 1 / 0, T1 = 500, Yl = null;
    function Kp() {
      C0 = Wn() + T1;
    }
    function R0() {
      return C0;
    }
    var $m = !1, e_ = null, Wf = null, ic = !1, $o = null, qp = ae, t_ = [], n_ = null, w1 = 50, Xp = 0, r_ = null, a_ = !1, Ym = !1, b1 = 50, Qf = 0, Wm = null, Zp = tn, Qm = ae, T0 = !1;
    function Gm() {
      return Ea;
    }
    function Ca() {
      return (Mt & (Ir | Fi)) !== hr ? Wn() : (Zp !== tn || (Zp = Wn()), Zp);
    }
    function Yo(e) {
      var t = e.mode;
      if ((t & wt) === qe)
        return ut;
      if ((Mt & Ir) !== hr && mr !== ae)
        return bs(mr);
      var a = Eb() !== _b;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Qm === zt && (Qm = Vd()), Qm;
      }
      var l = ja();
      if (l !== zt)
        return l;
      var s = iw();
      return s;
    }
    function x1(e) {
      var t = e.mode;
      return (t & wt) === qe ? ut : Zv();
    }
    function gr(e, t, a, i) {
      X1(), T0 && v("useInsertionEffect must not schedule updates."), a_ && (Ym = !0), Co(e, a, i), (Mt & Ir) !== ae && e === Ea ? ek(t) : (Jr && Ds(e, t, a), tk(t), e === Ea && ((Mt & Ir) === hr && (Qp = _t(Qp, a)), yr === Yp && Wo(e, mr)), Ia(e, i), a === ut && Mt === hr && (t.mode & wt) === qe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !vu.isBatchingLegacy && (Kp(), TE()));
    }
    function k1(e, t, a) {
      var i = e.current;
      i.lanes = t, Co(e, t, a), Ia(e, a);
    }
    function D1(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Mt & Ir) !== hr
      );
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      tf(e, t);
      var i = ef(e, e === Ea ? mr : ae);
      if (i === ae) {
        a !== null && V0(a), e.callbackNode = null, e.callbackPriority = zt;
        return;
      }
      var l = ju(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(vu.current !== null && a !== f_)) {
        a == null && s !== ut && v("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && V0(a);
      var f;
      if (l === ut)
        e.tag === Ao ? (vu.isBatchingLegacy !== null && (vu.didScheduleLegacyUpdate = !0), rb(x0.bind(null, e))) : RE(x0.bind(null, e)), vu.current !== null ? vu.current.push(Uo) : lw(function() {
          (Mt & (Ir | Fi)) === hr && Uo();
        }), f = null;
      else {
        var p;
        switch (ih(i)) {
          case Mr:
            p = ds;
            break;
          case ki:
            p = Nu;
            break;
          case Ua:
            p = Xi;
            break;
          case za:
            p = gl;
            break;
          default:
            p = Xi;
            break;
        }
        f = d_(p, w0.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = f;
    }
    function w0(e, t) {
      if (Qb(), Zp = tn, Qm = ae, (Mt & (Ir | Fi)) !== hr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Ql();
      if (i && e.callbackNode !== a)
        return null;
      var l = ef(e, e === Ea ? mr : ae);
      if (l === ae)
        return null;
      var s = !rf(e, l) && !Xv(e, l) && !t, f = s ? P1(e, l) : qm(e, l);
      if (f !== $l) {
        if (f === ac) {
          var p = nf(e);
          p !== ae && (l = p, f = i_(e, p));
        }
        if (f === $p) {
          var h = Wp;
          throw uc(e, ae), Wo(e, l), Ia(e, Wn()), h;
        }
        if (f === XS)
          Wo(e, l);
        else {
          var E = !rf(e, l), C = e.current.alternate;
          if (E && !L1(C)) {
            if (f = qm(e, l), f === ac) {
              var N = nf(e);
              N !== ae && (l = N, f = i_(e, N));
            }
            if (f === $p) {
              var L = Wp;
              throw uc(e, ae), Wo(e, l), Ia(e, Wn()), L;
            }
          }
          e.finishedWork = C, e.finishedLanes = l, O1(e, f, l);
        }
      }
      return Ia(e, Wn()), e.callbackNode === a ? w0.bind(null, e) : null;
    }
    function i_(e, t) {
      var a = Gp;
      if (lf(e)) {
        var i = uc(e, t);
        i.flags |= Cr, qw(e.containerInfo);
      }
      var l = qm(e, t);
      if (l !== ac) {
        var s = Ba;
        Ba = a, s !== null && b0(s);
      }
      return l;
    }
    function b0(e) {
      Ba === null ? Ba = e : Ba.push.apply(Ba, e);
    }
    function O1(e, t, a) {
      switch (t) {
        case $l:
        case $p:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case ac: {
          lc(e, Ba, Yl);
          break;
        }
        case Hm: {
          if (Wo(e, a), Dl(a) && // do not delay if we're inside an act() scope
          !H0()) {
            var i = JS + E0 - Wn();
            if (i > 10) {
              var l = ef(e, ae);
              if (l !== ae)
                break;
              var s = e.suspendedLanes;
              if (!Ol(s, a)) {
                Ca(), af(e, s);
                break;
              }
              e.timeoutHandle = ng(lc.bind(null, e, Ba, Yl), i);
              break;
            }
          }
          lc(e, Ba, Yl);
          break;
        }
        case Yp: {
          if (Wo(e, a), Fd(a))
            break;
          if (!H0()) {
            var f = ii(e, a), p = f, h = Wn() - p, E = q1(h) - h;
            if (E > 10) {
              e.timeoutHandle = ng(lc.bind(null, e, Ba, Yl), E);
              break;
            }
          }
          lc(e, Ba, Yl);
          break;
        }
        case _0: {
          lc(e, Ba, Yl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function L1(e) {
      for (var t = e; ; ) {
        if (t.flags & yo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], f = s.getSnapshot, p = s.value;
                try {
                  if (!oe(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var h = t.child;
        if (t.subtreeFlags & yo && h !== null) {
          h.return = t, t = h;
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
    function Wo(e, t) {
      t = xs(t, Im), t = xs(t, Qp), th(e, t);
    }
    function x0(e) {
      if (Gb(), (Mt & (Ir | Fi)) !== hr)
        throw new Error("Should not already be working.");
      Ql();
      var t = ef(e, ae);
      if (!ta(t, ut))
        return Ia(e, Wn()), null;
      var a = qm(e, t);
      if (e.tag !== Ao && a === ac) {
        var i = nf(e);
        i !== ae && (t = i, a = i_(e, i));
      }
      if (a === $p) {
        var l = Wp;
        throw uc(e, ae), Wo(e, t), Ia(e, Wn()), l;
      }
      if (a === XS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, lc(e, Ba, Yl), Ia(e, Wn()), null;
    }
    function M1(e, t) {
      t !== ae && (uf(e, _t(t, ut)), Ia(e, Wn()), (Mt & (Ir | Fi)) === hr && (Kp(), Uo()));
    }
    function u_(e, t) {
      var a = Mt;
      Mt |= S0;
      try {
        return e(t);
      } finally {
        Mt = a, Mt === hr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !vu.isBatchingLegacy && (Kp(), TE());
      }
    }
    function N1(e, t, a, i, l) {
      var s = ja(), f = Br.transition;
      try {
        return Br.transition = null, jn(Mr), e(t, a, i, l);
      } finally {
        jn(s), Br.transition = f, Mt === hr && Kp();
      }
    }
    function Wl(e) {
      $o !== null && $o.tag === Ao && (Mt & (Ir | Fi)) === hr && Ql();
      var t = Mt;
      Mt |= S0;
      var a = Br.transition, i = ja();
      try {
        return Br.transition = null, jn(Mr), e ? e() : void 0;
      } finally {
        jn(i), Br.transition = a, Mt = t, (Mt & (Ir | Fi)) === hr && Uo();
      }
    }
    function k0() {
      return (Mt & (Ir | Fi)) !== hr;
    }
    function Km(e, t) {
      ua(ZS, Ju, e), Ju = _t(Ju, t);
    }
    function l_(e) {
      Ju = ZS.current, ia(ZS, e);
    }
    function uc(e, t) {
      e.finishedWork = null, e.finishedLanes = ae;
      var a = e.timeoutHandle;
      if (a !== rg && (e.timeoutHandle = rg, uw(a)), Dn !== null)
        for (var i = Dn.return; i !== null; ) {
          var l = i.alternate;
          r0(l, i), i = i.return;
        }
      Ea = e;
      var s = oc(e.current, null);
      return Dn = s, mr = Ju = t, yr = $l, Wp = null, Bm = ae, Qp = ae, Im = ae, Gp = null, Ba = null, kb(), uu.discardPendingWarnings(), s;
    }
    function D0(e, t) {
      do {
        var a = Dn;
        try {
          if (im(), JE(), cn(), qS.current = null, a === null || a.return === null) {
            yr = $p, Wp = t, Dn = null;
            return;
          }
          if (Ne && a.mode & Ft && Am(a, !0), Ge)
            if (ya(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              xi(a, i, mr);
            } else
              vs(a, t, mr);
          rx(e, a.return, a, t, mr), N0(a);
        } catch (l) {
          t = l, Dn === a && a !== null ? (a = a.return, Dn = a) : a = Dn;
          continue;
        }
        return;
      } while (!0);
    }
    function O0() {
      var e = KS.current;
      return KS.current = Dm, e === null ? Dm : e;
    }
    function L0(e) {
      KS.current = e;
    }
    function A1() {
      JS = Wn();
    }
    function Jp(e) {
      Bm = _t(e, Bm);
    }
    function U1() {
      yr === $l && (yr = Hm);
    }
    function o_() {
      (yr === $l || yr === Hm || yr === ac) && (yr = Yp), Ea !== null && (ws(Bm) || ws(Qp)) && Wo(Ea, mr);
    }
    function z1(e) {
      yr !== Yp && (yr = ac), Gp === null ? Gp = [e] : Gp.push(e);
    }
    function j1() {
      return yr === $l;
    }
    function qm(e, t) {
      var a = Mt;
      Mt |= Ir;
      var i = O0();
      if (Ea !== e || mr !== t) {
        if (Jr) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (ev(e, mr), l.clear()), nh(e, t);
        }
        Yl = $d(), uc(e, t);
      }
      Cl(t);
      do
        try {
          F1();
          break;
        } catch (s) {
          D0(e, s);
        }
      while (!0);
      if (im(), Mt = a, L0(i), Dn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return zc(), Ea = null, mr = ae, yr;
    }
    function F1() {
      for (; Dn !== null; )
        M0(Dn);
    }
    function P1(e, t) {
      var a = Mt;
      Mt |= Ir;
      var i = O0();
      if (Ea !== e || mr !== t) {
        if (Jr) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (ev(e, mr), l.clear()), nh(e, t);
        }
        Yl = $d(), Kp(), uc(e, t);
      }
      Cl(t);
      do
        try {
          V1();
          break;
        } catch (s) {
          D0(e, s);
        }
      while (!0);
      return im(), L0(i), Mt = a, Dn !== null ? (Qv(), $l) : (zc(), Ea = null, mr = ae, yr);
    }
    function V1() {
      for (; Dn !== null && !Rd(); )
        M0(Dn);
    }
    function M0(e) {
      var t = e.alternate;
      Kt(e);
      var a;
      (e.mode & Ft) !== qe ? (fS(e), a = s_(t, e, Ju), Am(e, !0)) : a = s_(t, e, Ju), cn(), e.memoizedProps = e.pendingProps, a === null ? N0(e) : Dn = a, qS.current = null;
    }
    function N0(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & fs) === Ke) {
          Kt(t);
          var l = void 0;
          if ((t.mode & Ft) === qe ? l = n0(a, t, Ju) : (fS(t), l = n0(a, t, Ju), Am(t, !1)), cn(), l !== null) {
            Dn = l;
            return;
          }
        } else {
          var s = Ux(a, t);
          if (s !== null) {
            s.flags &= Hv, Dn = s;
            return;
          }
          if ((t.mode & Ft) !== qe) {
            Am(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= fs, i.subtreeFlags = Ke, i.deletions = null;
          else {
            yr = XS, Dn = null;
            return;
          }
        }
        var h = t.sibling;
        if (h !== null) {
          Dn = h;
          return;
        }
        t = i, Dn = t;
      } while (t !== null);
      yr === $l && (yr = _0);
    }
    function lc(e, t, a) {
      var i = ja(), l = Br.transition;
      try {
        Br.transition = null, jn(Mr), H1(e, t, a, i);
      } finally {
        Br.transition = l, jn(i);
      }
      return null;
    }
    function H1(e, t, a, i) {
      do
        Ql();
      while ($o !== null);
      if (Z1(), (Mt & (Ir | Fi)) !== hr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (Dd(s), l === null)
        return Od(), null;
      if (s === ae && v("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ae, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = zt;
      var f = _t(l.lanes, l.childLanes);
      Bd(e, f), e === Ea && (Ea = null, Dn = null, mr = ae), ((l.subtreeFlags & qi) !== Ke || (l.flags & qi) !== Ke) && (ic || (ic = !0, n_ = a, d_(Xi, function() {
        return Ql(), null;
      })));
      var p = (l.subtreeFlags & (Ou | Lu | Mu | qi)) !== Ke, h = (l.flags & (Ou | Lu | Mu | qi)) !== Ke;
      if (p || h) {
        var E = Br.transition;
        Br.transition = null;
        var C = ja();
        jn(Mr);
        var N = Mt;
        Mt |= Fi, qS.current = null, Vx(e, l), TC(), e1(e, l, s), JT(e.containerInfo), e.current = l, hs(s), t1(l, e, s), ms(), Td(), Mt = N, jn(C), Br.transition = E;
      } else
        e.current = l, TC();
      var L = ic;
      if (ic ? (ic = !1, $o = e, qp = s) : (Qf = 0, Wm = null), f = e.pendingLanes, f === ae && (Wf = null), L || j0(e.current, !1), bd(l.stateNode, i), Jr && e.memoizedUpdaters.clear(), _1(), Ia(e, Wn()), t !== null)
        for (var H = e.onRecoverableError, $ = 0; $ < t.length; $++) {
          var q = t[$], we = q.stack, Je = q.digest;
          H(q.value, {
            componentStack: we,
            digest: Je
          });
        }
      if ($m) {
        $m = !1;
        var We = e_;
        throw e_ = null, We;
      }
      return ta(qp, ut) && e.tag !== Ao && Ql(), f = e.pendingLanes, ta(f, ut) ? (Wb(), e === r_ ? Xp++ : (Xp = 0, r_ = e)) : Xp = 0, Uo(), Od(), null;
    }
    function Ql() {
      if ($o !== null) {
        var e = ih(qp), t = Ls(Ua, e), a = Br.transition, i = ja();
        try {
          return Br.transition = null, jn(t), I1();
        } finally {
          jn(i), Br.transition = a;
        }
      }
      return !1;
    }
    function B1(e) {
      t_.push(e), ic || (ic = !0, d_(Xi, function() {
        return Ql(), null;
      }));
    }
    function I1() {
      if ($o === null)
        return !1;
      var e = n_;
      n_ = null;
      var t = $o, a = qp;
      if ($o = null, qp = ae, (Mt & (Ir | Fi)) !== hr)
        throw new Error("Cannot flush passive effects while already rendering.");
      a_ = !0, Ym = !1, El(a);
      var i = Mt;
      Mt |= Fi, o1(t.current), a1(t, t.current, a, e);
      {
        var l = t_;
        t_ = [];
        for (var s = 0; s < l.length; s++) {
          var f = l[s];
          $x(t, f);
        }
      }
      Nd(), j0(t.current, !0), Mt = i, Uo(), Ym ? t === Wm ? Qf++ : (Qf = 0, Wm = t) : Qf = 0, a_ = !1, Ym = !1, xd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function A0(e) {
      return Wf !== null && Wf.has(e);
    }
    function $1(e) {
      Wf === null ? Wf = /* @__PURE__ */ new Set([e]) : Wf.add(e);
    }
    function Y1(e) {
      $m || ($m = !0, e_ = e);
    }
    var W1 = Y1;
    function U0(e, t, a) {
      var i = nc(a, t), l = MC(e, i, ut), s = jo(e, l, ut), f = Ca();
      s !== null && (Co(s, ut, f), Ia(s, f));
    }
    function fn(e, t, a) {
      if (jx(a), tv(!1), e.tag === W) {
        U0(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === W) {
          U0(i, e, a);
          return;
        } else if (i.tag === k) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !A0(s)) {
            var f = nc(a, e), p = DS(i, f, ut), h = jo(i, p, ut), E = Ca();
            h !== null && (Co(h, ut, E), Ia(h, E));
            return;
          }
        }
        i = i.return;
      }
      v(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Q1(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = Ca();
      af(e, a), nk(e), Ea === e && Ol(mr, a) && (yr === Yp || yr === Hm && Dl(mr) && Wn() - JS < E0 ? uc(e, ae) : Im = _t(Im, a)), Ia(e, l);
    }
    function z0(e, t) {
      t === zt && (t = x1(e));
      var a = Ca(), i = Va(e, t);
      i !== null && (Co(i, t, a), Ia(i, a));
    }
    function G1(e) {
      var t = e.memoizedState, a = zt;
      t !== null && (a = t.retryLane), z0(e, a);
    }
    function K1(e, t) {
      var a = zt, i;
      switch (e.tag) {
        case pe:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case ct:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), z0(e, a);
    }
    function q1(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : R1(e / 1960) * 1960;
    }
    function X1() {
      if (Xp > w1)
        throw Xp = 0, r_ = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Qf > b1 && (Qf = 0, Wm = null, v("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Z1() {
      uu.flushLegacyContextWarning(), uu.flushPendingUnsafeLifecycleWarnings();
    }
    function j0(e, t) {
      Kt(e), Xm(e, Du, y1), t && Xm(e, Ti, g1), Xm(e, Du, h1), t && Xm(e, Ti, m1), cn();
    }
    function Xm(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== Ke ? i = i.child : ((i.flags & t) !== Ke && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var Zm = null;
    function F0(e) {
      {
        if ((Mt & Ir) !== hr || !(e.mode & wt))
          return;
        var t = e.tag;
        if (t !== Y && t !== W && t !== k && t !== O && t !== Ee && t !== et && t !== Be)
          return;
        var a = pt(e) || "ReactComponent";
        if (Zm !== null) {
          if (Zm.has(a))
            return;
          Zm.add(a);
        } else
          Zm = /* @__PURE__ */ new Set([a]);
        var i = ur;
        try {
          Kt(e), v("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Kt(e) : cn();
        }
      }
    }
    var s_;
    {
      var J1 = null;
      s_ = function(e, t, a) {
        var i = W0(J1, t);
        try {
          return XC(e, t, a);
        } catch (s) {
          if (fb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (im(), JE(), r0(e, t), W0(t, i), t.mode & Ft && fS(t), ku(null, XC, null, e, t, a), Gi()) {
            var l = cs();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var P0 = !1, c_;
    c_ = /* @__PURE__ */ new Set();
    function ek(e) {
      if (yi && !Ib())
        switch (e.tag) {
          case O:
          case Ee:
          case Be: {
            var t = Dn && pt(Dn) || "Unknown", a = t;
            if (!c_.has(a)) {
              c_.add(a);
              var i = pt(e) || "Unknown";
              v("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case k: {
            P0 || (v("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), P0 = !0);
            break;
          }
        }
    }
    function ev(e, t) {
      if (Jr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ds(e, i, t);
        });
      }
    }
    var f_ = {};
    function d_(e, t) {
      {
        var a = vu.current;
        return a !== null ? (a.push(t), f_) : Cd(e, t);
      }
    }
    function V0(e) {
      if (e !== f_)
        return Iv(e);
    }
    function H0() {
      return vu.current !== null;
    }
    function tk(e) {
      {
        if (e.mode & wt) {
          if (!g0())
            return;
        } else if (!C1() || Mt !== hr || e.tag !== O && e.tag !== Ee && e.tag !== Be)
          return;
        if (vu.current === null) {
          var t = ur;
          try {
            Kt(e), v(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, pt(e));
          } finally {
            t ? Kt(e) : cn();
          }
        }
      }
    }
    function nk(e) {
      e.tag !== Ao && g0() && vu.current === null && v(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function tv(e) {
      T0 = e;
    }
    var Pi = null, Gf = null, rk = function(e) {
      Pi = e;
    };
    function Kf(e) {
      {
        if (Pi === null)
          return e;
        var t = Pi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function p_(e) {
      return Kf(e);
    }
    function v_(e) {
      {
        if (Pi === null)
          return e;
        var t = Pi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Kf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: re,
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
    function B0(e, t) {
      {
        if (Pi === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case k: {
            typeof i == "function" && (l = !0);
            break;
          }
          case O: {
            (typeof i == "function" || s === ht) && (l = !0);
            break;
          }
          case Ee: {
            (s === re || s === ht) && (l = !0);
            break;
          }
          case et:
          case Be: {
            (s === gt || s === ht) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var f = Pi(a);
          if (f !== void 0 && f === Pi(i))
            return !0;
        }
        return !1;
      }
    }
    function I0(e) {
      {
        if (Pi === null || typeof WeakSet != "function")
          return;
        Gf === null && (Gf = /* @__PURE__ */ new WeakSet()), Gf.add(e);
      }
    }
    var ak = function(e, t) {
      {
        if (Pi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Ql(), Wl(function() {
          h_(e.current, i, a);
        });
      }
    }, ik = function(e, t) {
      {
        if (e.context !== oi)
          return;
        Ql(), Wl(function() {
          nv(t, e, null, null);
        });
      }
    };
    function h_(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, f = e.tag, p = e.type, h = null;
        switch (f) {
          case O:
          case Be:
          case k:
            h = p;
            break;
          case Ee:
            h = p.render;
            break;
        }
        if (Pi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var E = !1, C = !1;
        if (h !== null) {
          var N = Pi(h);
          N !== void 0 && (a.has(N) ? C = !0 : t.has(N) && (f === k ? C = !0 : E = !0));
        }
        if (Gf !== null && (Gf.has(e) || i !== null && Gf.has(i)) && (C = !0), C && (e._debugNeedsRemount = !0), C || E) {
          var L = Va(e, ut);
          L !== null && gr(L, e, ut, tn);
        }
        l !== null && !C && h_(l, t, a), s !== null && h_(s, t, a);
      }
    }
    var uk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return m_(e.current, i, a), a;
      }
    };
    function m_(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case O:
          case Be:
          case k:
            p = f;
            break;
          case Ee:
            p = f.render;
            break;
        }
        var h = !1;
        p !== null && t.has(p) && (h = !0), h ? lk(e, a) : i !== null && m_(i, t, a), l !== null && m_(l, t, a);
      }
    }
    function lk(e, t) {
      {
        var a = ok(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Z:
              t.add(i.stateNode);
              return;
            case J:
              t.add(i.stateNode.containerInfo);
              return;
            case W:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function ok(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === Z)
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
    var y_;
    {
      y_ = !1;
      try {
        var $0 = Object.preventExtensions({});
      } catch {
        y_ = !0;
      }
    }
    function sk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ke, this.subtreeFlags = Ke, this.deletions = null, this.lanes = ae, this.childLanes = ae, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !y_ && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var si = function(e, t, a, i) {
      return new sk(e, t, a, i);
    };
    function g_(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ck(e) {
      return typeof e == "function" && !g_(e) && e.defaultProps === void 0;
    }
    function fk(e) {
      if (typeof e == "function")
        return g_(e) ? k : O;
      if (e != null) {
        var t = e.$$typeof;
        if (t === re)
          return Ee;
        if (t === gt)
          return et;
      }
      return Y;
    }
    function oc(e, t) {
      var a = e.alternate;
      a === null ? (a = si(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ke, a.subtreeFlags = Ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & An, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Y:
        case O:
        case Be:
          a.type = Kf(e.type);
          break;
        case k:
          a.type = p_(e.type);
          break;
        case Ee:
          a.type = v_(e.type);
          break;
      }
      return a;
    }
    function dk(e, t) {
      e.flags &= An | mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ae, e.lanes = t, e.child = null, e.subtreeFlags = Ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ke, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function pk(e, t, a) {
      var i;
      return e === Kh ? (i = wt, t === !0 && (i |= Zt, i |= Pt)) : i = qe, Jr && (i |= Ft), si(W, null, null, i);
    }
    function S_(e, t, a, i, l, s) {
      var f = Y, p = e;
      if (typeof e == "function")
        g_(e) ? (f = k, p = p_(p)) : p = Kf(p);
      else if (typeof e == "string")
        f = Z;
      else
        e: switch (e) {
          case pi:
            return Qo(a.children, l, s, t);
          case Ga:
            f = Fe, l |= Zt, (l & wt) !== qe && (l |= Pt);
            break;
          case vi:
            return vk(a, l, s, t);
          case Ce:
            return hk(a, l, s, t);
          case ze:
            return mk(a, l, s, t);
          case Rn:
            return Y0(a, l, s, t);
          case an:
          // eslint-disable-next-line no-fallthrough
          case bt:
          // eslint-disable-next-line no-fallthrough
          case sn:
          // eslint-disable-next-line no-fallthrough
          case ir:
          // eslint-disable-next-line no-fallthrough
          case Tt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case hi:
                  f = Me;
                  break e;
                case x:
                  f = ot;
                  break e;
                case re:
                  f = Ee, p = v_(p);
                  break e;
                case gt:
                  f = et;
                  break e;
                case ht:
                  f = $e, p = null;
                  break e;
              }
            var h = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var E = i ? pt(i) : null;
              E && (h += `

Check the render method of \`` + E + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + h));
          }
        }
      var C = si(f, a, t, l);
      return C.elementType = e, C.type = p, C.lanes = s, C._debugOwner = i, C;
    }
    function __(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, f = e.props, p = S_(l, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Qo(e, t, a, i) {
      var l = si(he, e, i, t);
      return l.lanes = a, l;
    }
    function vk(e, t, a, i) {
      typeof e.id != "string" && v('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = si(De, e, i, t | Ft);
      return l.elementType = vi, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function hk(e, t, a, i) {
      var l = si(pe, e, i, t);
      return l.elementType = Ce, l.lanes = a, l;
    }
    function mk(e, t, a, i) {
      var l = si(ct, e, i, t);
      return l.elementType = ze, l.lanes = a, l;
    }
    function Y0(e, t, a, i) {
      var l = si(ee, e, i, t);
      l.elementType = Rn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function E_(e, t, a) {
      var i = si(ve, e, null, t);
      return i.lanes = a, i;
    }
    function yk() {
      var e = si(Z, null, null, qe);
      return e.elementType = "DELETED", e;
    }
    function gk(e) {
      var t = si(st, null, null, qe);
      return t.stateNode = e, t;
    }
    function C_(e, t, a) {
      var i = e.children !== null ? e.children : [], l = si(J, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function W0(e, t) {
      return e === null && (e = si(Y, null, null, qe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Sk(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = rg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = zt, this.eventTimes = ks(ae), this.expirationTimes = ks(tn), this.pendingLanes = ae, this.suspendedLanes = ae, this.pingedLanes = ae, this.expiredLanes = ae, this.mutableReadLanes = ae, this.finishedLanes = ae, this.entangledLanes = ae, this.entanglements = ks(ae), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Rl; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Kh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Ao:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function Q0(e, t, a, i, l, s, f, p, h, E) {
      var C = new Sk(e, t, a, p, h), N = pk(t, s);
      C.current = N, N.stateNode = C;
      {
        var L = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        N.memoizedState = L;
      }
      return Ug(N), C;
    }
    var R_ = "18.3.1";
    function _k(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Wr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ar,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var T_, w_;
    T_ = !1, w_ = {};
    function G0(e) {
      if (!e)
        return oi;
      var t = mo(e), a = nb(t);
      if (t.tag === k) {
        var i = t.type;
        if (Wu(i))
          return EE(t, i, a);
      }
      return a;
    }
    function Ek(e, t) {
      {
        var a = mo(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = Xr(a);
        if (l === null)
          return null;
        if (l.mode & Zt) {
          var s = pt(a) || "Component";
          if (!w_[s]) {
            w_[s] = !0;
            var f = ur;
            try {
              Kt(l), a.mode & Zt ? v("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : v("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Kt(f) : cn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function K0(e, t, a, i, l, s, f, p) {
      var h = !1, E = null;
      return Q0(e, t, h, E, a, i, l, s, f);
    }
    function q0(e, t, a, i, l, s, f, p, h, E) {
      var C = !0, N = Q0(a, i, C, e, l, s, f, p, h);
      N.context = G0(null);
      var L = N.current, H = Ca(), $ = Yo(L), q = Bl(H, $);
      return q.callback = t ?? null, jo(L, q, $), k1(N, $, H), N;
    }
    function nv(e, t, a, i) {
      wd(t, e);
      var l = t.current, s = Ca(), f = Yo(l);
      gn(f);
      var p = G0(a);
      t.context === null ? t.context = p : t.pendingContext = p, yi && ur !== null && !T_ && (T_ = !0, v(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, pt(ur) || "Unknown"));
      var h = Bl(s, f);
      h.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && v("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), h.callback = i);
      var E = jo(l, h, f);
      return E !== null && (gr(E, l, f, s), cm(E, l, f)), f;
    }
    function Jm(e) {
      var t = e.current;
      return t.child ? t.child.tag === Z ? t.child.stateNode : t.child.stateNode : null;
    }
    function Ck(e) {
      switch (e.tag) {
        case W: {
          var t = e.stateNode;
          if (lf(t)) {
            var a = Kv(t);
            M1(t, a);
          }
          break;
        }
        case pe: {
          Wl(function() {
            var l = Va(e, ut);
            if (l !== null) {
              var s = Ca();
              gr(l, e, ut, s);
            }
          });
          var i = ut;
          b_(e, i);
          break;
        }
      }
    }
    function X0(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = eh(a.retryLane, t));
    }
    function b_(e, t) {
      X0(e, t);
      var a = e.alternate;
      a && X0(a, t);
    }
    function Rk(e) {
      if (e.tag === pe) {
        var t = Cs, a = Va(e, t);
        if (a !== null) {
          var i = Ca();
          gr(a, e, t, i);
        }
        b_(e, t);
      }
    }
    function Tk(e) {
      if (e.tag === pe) {
        var t = Yo(e), a = Va(e, t);
        if (a !== null) {
          var i = Ca();
          gr(a, e, t, i);
        }
        b_(e, t);
      }
    }
    function Z0(e) {
      var t = dn(e);
      return t === null ? null : t.stateNode;
    }
    var J0 = function(e) {
      return null;
    };
    function wk(e) {
      return J0(e);
    }
    var eR = function(e) {
      return !1;
    };
    function bk(e) {
      return eR(e);
    }
    var tR = null, nR = null, rR = null, aR = null, iR = null, uR = null, lR = null, oR = null, sR = null;
    {
      var cR = function(e, t, a) {
        var i = t[a], l = Rt(e) ? e.slice() : Et({}, e);
        return a + 1 === t.length ? (Rt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = cR(e[i], t, a + 1), l);
      }, fR = function(e, t) {
        return cR(e, t, 0);
      }, dR = function(e, t, a, i) {
        var l = t[i], s = Rt(e) ? e.slice() : Et({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[l], Rt(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = dR(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, pR = function(e, t, a) {
        if (t.length !== a.length) {
          T("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              T("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return dR(e, t, a, 0);
      }, vR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = Rt(e) ? e.slice() : Et({}, e);
        return s[l] = vR(e[l], t, a + 1, i), s;
      }, hR = function(e, t, a) {
        return vR(e, t, 0, a);
      }, x_ = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      tR = function(e, t, a, i) {
        var l = x_(e, t);
        if (l !== null) {
          var s = hR(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Et({}, e.memoizedProps);
          var f = Va(e, ut);
          f !== null && gr(f, e, ut, tn);
        }
      }, nR = function(e, t, a) {
        var i = x_(e, t);
        if (i !== null) {
          var l = fR(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = Et({}, e.memoizedProps);
          var s = Va(e, ut);
          s !== null && gr(s, e, ut, tn);
        }
      }, rR = function(e, t, a, i) {
        var l = x_(e, t);
        if (l !== null) {
          var s = pR(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Et({}, e.memoizedProps);
          var f = Va(e, ut);
          f !== null && gr(f, e, ut, tn);
        }
      }, aR = function(e, t, a) {
        e.pendingProps = hR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, ut);
        i !== null && gr(i, e, ut, tn);
      }, iR = function(e, t) {
        e.pendingProps = fR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Va(e, ut);
        a !== null && gr(a, e, ut, tn);
      }, uR = function(e, t, a) {
        e.pendingProps = pR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, ut);
        i !== null && gr(i, e, ut, tn);
      }, lR = function(e) {
        var t = Va(e, ut);
        t !== null && gr(t, e, ut, tn);
      }, oR = function(e) {
        J0 = e;
      }, sR = function(e) {
        eR = e;
      };
    }
    function xk(e) {
      var t = Xr(e);
      return t === null ? null : t.stateNode;
    }
    function kk(e) {
      return null;
    }
    function Dk() {
      return ur;
    }
    function Ok(e) {
      var t = e.findFiberByHostInstance, a = m.ReactCurrentDispatcher;
      return So({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: tR,
        overrideHookStateDeletePath: nR,
        overrideHookStateRenamePath: rR,
        overrideProps: aR,
        overridePropsDeletePath: iR,
        overridePropsRenamePath: uR,
        setErrorHandler: oR,
        setSuspenseHandler: sR,
        scheduleUpdate: lR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: xk,
        findFiberByHostInstance: t || kk,
        // React Refresh
        findHostInstancesForRefresh: uk,
        scheduleRefresh: ak,
        scheduleRoot: ik,
        setRefreshHandler: rk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Dk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: R_
      });
    }
    var mR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function k_(e) {
      this._internalRoot = e;
    }
    ey.prototype.render = k_.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? v("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ty(arguments[1]) ? v("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && v("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Mn) {
          var i = Z0(t.current);
          i && i.parentNode !== a && v("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      nv(e, t, null, null);
    }, ey.prototype.unmount = k_.prototype.unmount = function() {
      typeof arguments[0] == "function" && v("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        k0() && v("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Wl(function() {
          nv(null, e, null, null);
        }), mE(t);
      }
    };
    function Lk(e, t) {
      if (!ty(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      yR(e);
      var a = !1, i = !1, l = "", s = mR;
      t != null && (t.hydrate ? T("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === kr && v(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = K0(e, Kh, null, a, i, l, s);
      Bh(f.current, e);
      var p = e.nodeType === Mn ? e.parentNode : e;
      return op(p), new k_(f);
    }
    function ey(e) {
      this._internalRoot = e;
    }
    function Mk(e) {
      e && ch(e);
    }
    ey.prototype.unstable_scheduleHydration = Mk;
    function Nk(e, t, a) {
      if (!ty(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      yR(e), t === void 0 && v("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", h = mR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (h = a.onRecoverableError));
      var E = q0(t, null, e, Kh, i, s, f, p, h);
      if (Bh(E.current, e), op(e), l)
        for (var C = 0; C < l.length; C++) {
          var N = l[C];
          jb(E, N);
        }
      return new ey(E);
    }
    function ty(e) {
      return !!(e && (e.nodeType === Gr || e.nodeType === Qi || e.nodeType === cd));
    }
    function rv(e) {
      return !!(e && (e.nodeType === Gr || e.nodeType === Qi || e.nodeType === cd || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function yR(e) {
      e.nodeType === Gr && e.tagName && e.tagName.toUpperCase() === "BODY" && v("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Sp(e) && (e._reactRootContainer ? v("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : v("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Ak = m.ReactCurrentOwner, gR;
    gR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = Z0(e._reactRootContainer.current);
        t && t.parentNode !== e && v("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = D_(e), l = !!(i && Mo(i));
      l && !a && v("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Gr && e.tagName && e.tagName.toUpperCase() === "BODY" && v("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function D_(e) {
      return e ? e.nodeType === Qi ? e.documentElement : e.firstChild : null;
    }
    function SR() {
    }
    function Uk(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var L = Jm(f);
            s.call(L);
          };
        }
        var f = q0(
          t,
          i,
          e,
          Ao,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          SR
        );
        e._reactRootContainer = f, Bh(f.current, e);
        var p = e.nodeType === Mn ? e.parentNode : e;
        return op(p), Wl(), f;
      } else {
        for (var h; h = e.lastChild; )
          e.removeChild(h);
        if (typeof i == "function") {
          var E = i;
          i = function() {
            var L = Jm(C);
            E.call(L);
          };
        }
        var C = K0(
          e,
          Ao,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          SR
        );
        e._reactRootContainer = C, Bh(C.current, e);
        var N = e.nodeType === Mn ? e.parentNode : e;
        return op(N), Wl(function() {
          nv(t, C, a, i);
        }), C;
      }
    }
    function zk(e, t) {
      e !== null && typeof e != "function" && v("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ny(e, t, a, i, l) {
      gR(a), zk(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Uk(a, t, e, l, i);
      else {
        if (f = s, typeof l == "function") {
          var p = l;
          l = function() {
            var h = Jm(f);
            p.call(h);
          };
        }
        nv(t, f, e, l);
      }
      return Jm(f);
    }
    var _R = !1;
    function jk(e) {
      {
        _R || (_R = !0, v("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Ak.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || v("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", At(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Gr ? e : Ek(e, "findDOMNode");
    }
    function Fk(e, t, a) {
      if (v("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !rv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Sp(t) && t._reactRootContainer === void 0;
        i && v("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return ny(null, e, t, !0, a);
    }
    function Pk(e, t, a) {
      if (v("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !rv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Sp(t) && t._reactRootContainer === void 0;
        i && v("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return ny(null, e, t, !1, a);
    }
    function Vk(e, t, a, i) {
      if (v("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !rv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !by(e))
        throw new Error("parentComponent must be a valid React Component");
      return ny(e, t, a, !1, i);
    }
    var ER = !1;
    function Hk(e) {
      if (ER || (ER = !0, v("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !rv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Sp(e) && e._reactRootContainer === void 0;
        t && v("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = D_(e), i = a && !Mo(a);
          i && v("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Wl(function() {
          ny(null, null, e, !1, function() {
            e._reactRootContainer = null, mE(e);
          });
        }), !0;
      } else {
        {
          var l = D_(e), s = !!(l && Mo(l)), f = e.nodeType === Gr && rv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && v("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Tr(Ck), Ro(Rk), uh(Tk), Ns(ja), Yd(rh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && v("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Rc(IT), wy(u_, N1, Wl);
    function Bk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ty(t))
        throw new Error("Target container is not a DOM element.");
      return _k(e, t, null, a);
    }
    function Ik(e, t, a, i) {
      return Vk(e, t, a, i);
    }
    var O_ = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Mo, bf, Ih, fo, Tc, u_]
    };
    function $k(e, t) {
      return O_.usingClientEntryPoint || v('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Lk(e, t);
    }
    function Yk(e, t, a) {
      return O_.usingClientEntryPoint || v('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Nk(e, t, a);
    }
    function Wk(e) {
      return k0() && v("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Wl(e);
    }
    var Qk = Ok({
      findFiberByHostInstance: Qs,
      bundleType: 1,
      version: R_,
      rendererPackageName: "react-dom"
    });
    if (!Qk && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var CR = window.location.protocol;
      /^(https?|file):$/.test(CR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (CR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O_, Ya.createPortal = Bk, Ya.createRoot = $k, Ya.findDOMNode = jk, Ya.flushSync = Wk, Ya.hydrate = Fk, Ya.hydrateRoot = Yk, Ya.render = Pk, Ya.unmountComponentAtNode = Hk, Ya.unstable_batchedUpdates = u_, Ya.unstable_renderSubtreeIntoContainer = Ik, Ya.version = R_, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), Ya;
}
var AR;
function yD() {
  if (AR) return iy.exports;
  AR = 1;
  function y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
      } catch (S) {
        console.error(S);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (y(), iy.exports = hD()) : iy.exports = mD(), iy.exports;
}
var H_ = yD();
const lv = /* @__PURE__ */ KR(H_);
function U_(y, S) {
  (S == null || S > y.length) && (S = y.length);
  for (var m = 0, w = Array(S); m < S; m++) w[m] = y[m];
  return w;
}
function gD(y) {
  if (Array.isArray(y)) return y;
}
function SD(y) {
  if (Array.isArray(y)) return U_(y);
}
function _D(y) {
  if (y === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return y;
}
function UR(y, S, m, w, U, T, v) {
  try {
    var z = y[T](v), O = z.value;
  } catch (k) {
    return void m(k);
  }
  z.done ? S(O) : Promise.resolve(O).then(w, U);
}
function ED(y) {
  return function() {
    var S = this, m = arguments;
    return new Promise(function(w, U) {
      var T = y.apply(S, m);
      function v(O) {
        UR(T, w, U, v, z, "next", O);
      }
      function z(O) {
        UR(T, w, U, v, z, "throw", O);
      }
      v(void 0);
    });
  };
}
function sy(y, S, m) {
  return S = z_(S), xD(y, ZR() ? Reflect.construct(S, m || [], z_(y).constructor) : S.apply(y, m));
}
function cv(y, S) {
  if (!(y instanceof S)) throw new TypeError("Cannot call a class as a function");
}
function zR(y, S) {
  for (var m = 0; m < S.length; m++) {
    var w = S[m];
    w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(y, oy(w.key), w);
  }
}
function fv(y, S, m) {
  return S && zR(y.prototype, S), m && zR(y, m), Object.defineProperty(y, "prototype", { writable: !1 }), y;
}
function Jf(y, S, m) {
  return (S = oy(S)) in y ? Object.defineProperty(y, S, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : y[S] = m, y;
}
function cc() {
  return (cc = Object.assign ? Object.assign.bind() : function(y) {
    for (var S = 1; S < arguments.length; S++) {
      var m, w = arguments[S];
      for (m in w) !{}.hasOwnProperty.call(w, m) || (y[m] = w[m]);
    }
    return y;
  }).apply(null, arguments);
}
function z_(y) {
  return (z_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(S) {
    return S.__proto__ || Object.getPrototypeOf(S);
  })(y);
}
function cy(y, S) {
  if (typeof S != "function" && S !== null) throw new TypeError("Super expression must either be null or a function");
  y.prototype = Object.create(S && S.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), Object.defineProperty(y, "prototype", { writable: !1 }), S && JR(y, S);
}
function ZR() {
  try {
    var y = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ZR = function() {
    return !!y;
  })();
}
function CD(y) {
  if (typeof Symbol < "u" && y[Symbol.iterator] != null || y["@@iterator"] != null) return Array.from(y);
}
function RD(y, S) {
  var m = y == null ? null : typeof Symbol < "u" && y[Symbol.iterator] || y["@@iterator"];
  if (m != null) {
    var w, U, T, v, z = [], O = !0, k = !1;
    try {
      if (T = (m = m.call(y)).next, S !== 0) for (; !(O = (w = T.call(m)).done) && (z.push(w.value), z.length !== S); O = !0) ;
    } catch (Y) {
      k = !0, U = Y;
    } finally {
      try {
        if (!O && m.return != null && (v = m.return(), Object(v) !== v)) return;
      } finally {
        if (k) throw U;
      }
    }
    return z;
  }
}
function TD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jR(y, S) {
  var m, w = Object.keys(y);
  return Object.getOwnPropertySymbols && (m = Object.getOwnPropertySymbols(y), S && (m = m.filter(function(U) {
    return Object.getOwnPropertyDescriptor(y, U).enumerable;
  })), w.push.apply(w, m)), w;
}
function ie(y) {
  for (var S = 1; S < arguments.length; S++) {
    var m = arguments[S] != null ? arguments[S] : {};
    S % 2 ? jR(Object(m), !0).forEach(function(w) {
      Jf(y, w, m[w]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(m)) : jR(Object(m)).forEach(function(w) {
      Object.defineProperty(y, w, Object.getOwnPropertyDescriptor(m, w));
    });
  }
  return y;
}
function Vi(y, S) {
  if (y == null) return {};
  var m, w = bD(y, S);
  if (Object.getOwnPropertySymbols) for (var U = Object.getOwnPropertySymbols(y), T = 0; T < U.length; T++) m = U[T], S.includes(m) || {}.propertyIsEnumerable.call(y, m) && (w[m] = y[m]);
  return w;
}
function bD(y, S) {
  if (y == null) return {};
  var m, w = {};
  for (m in y) if ({}.hasOwnProperty.call(y, m)) {
    if (S.includes(m)) continue;
    w[m] = y[m];
  }
  return w;
}
function xD(y, S) {
  if (S && (typeof S == "object" || typeof S == "function")) return S;
  if (S !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return _D(y);
}
function Xf() {
  Xf = function() {
    return S;
  };
  var y, S = {}, m = Object.prototype, w = m.hasOwnProperty, U = Object.defineProperty || function(K, ee, Se) {
    K[ee] = Se.value;
  }, Ee = typeof Symbol == "function" ? Symbol : {}, T = Ee.iterator || "@@iterator", v = Ee.asyncIterator || "@@asyncIterator", z = Ee.toStringTag || "@@toStringTag";
  function O(K, ee, Se) {
    return Object.defineProperty(K, ee, { value: Se, enumerable: !0, configurable: !0, writable: !0 }), K[ee];
  }
  try {
    O({}, "");
  } catch {
    O = function(ee, Se, je) {
      return ee[Se] = je;
    };
  }
  function k(K, fe, Se, A) {
    var Re, me, te, be, fe = fe && fe.prototype instanceof Fe ? fe : Fe, fe = Object.create(fe.prototype), A = new st(A || []);
    return U(fe, "_invoke", { value: (Re = K, me = Se, te = A, be = W, function(G, Ge) {
      if (be === Z) throw Error("Generator is already running");
      if (be === ve) {
        if (G === "throw") throw Ge;
        return { value: y, done: !0 };
      }
      for (te.method = G, te.arg = Ge; ; ) {
        var Ne = te.delegate;
        if (Ne && (Ne = (function vt(Xe, xe) {
          var it = xe.method, ft = Xe.iterator[it];
          return ft === y ? (xe.delegate = null, it === "throw" && Xe.iterator.return && (xe.method = "return", xe.arg = y, vt(Xe, xe), xe.method === "throw") || it !== "return" && (xe.method = "throw", xe.arg = new TypeError("The iterator does not provide a '" + it + "' method")), he) : (it = Y(ft, Xe.iterator, xe.arg), it.type === "throw" ? (xe.method = "throw", xe.arg = it.arg, xe.delegate = null, he) : (ft = it.arg, ft ? ft.done ? (xe[Xe.resultName] = ft.value, xe.next = Xe.nextLoc, xe.method !== "return" && (xe.method = "next", xe.arg = y), xe.delegate = null, he) : ft : (xe.method = "throw", xe.arg = new TypeError("iterator result is not an object"), xe.delegate = null, he)));
        })(Ne, te), Ne)) {
          if (Ne === he) continue;
          return Ne;
        }
        if (te.method === "next") te.sent = te._sent = te.arg;
        else if (te.method === "throw") {
          if (be === W) throw be = ve, te.arg;
          te.dispatchException(te.arg);
        } else te.method === "return" && te.abrupt("return", te.arg);
        if (be = Z, Ne = Y(Re, me, te), Ne.type === "normal") {
          if (be = te.done ? ve : J, Ne.arg === he) continue;
          return { value: Ne.arg, done: te.done };
        }
        Ne.type === "throw" && (be = ve, te.method = "throw", te.arg = Ne.arg);
      }
    }) }), fe;
  }
  function Y(K, ee, Se) {
    try {
      return { type: "normal", arg: K.call(ee, Se) };
    } catch (je) {
      return { type: "throw", arg: je };
    }
  }
  S.wrap = k;
  var W = "suspendedStart", J = "suspendedYield", Z = "executing", ve = "completed", he = {};
  function Fe() {
  }
  function ot() {
  }
  function Me() {
  }
  var Ee = {}, De = (O(Ee, T, function() {
    return this;
  }), Object.getPrototypeOf), De = De && De(De(ct([]))), pe = (De && De !== m && w.call(De, T) && (Ee = De), Me.prototype = Fe.prototype = Object.create(Ee));
  function et(K) {
    ["next", "throw", "return"].forEach(function(ee) {
      O(K, ee, function(Se) {
        return this._invoke(ee, Se);
      });
    });
  }
  function Be(K, ee) {
    var Se;
    U(this, "_invoke", { value: function(je, Re) {
      function me() {
        return new ee(function(te, be) {
          (function fe(Xe, G, Ge, Ne) {
            var vt, Xe = Y(K[Xe], K, G);
            if (Xe.type !== "throw") return (G = (vt = Xe.arg).value) && typeof G == "object" && w.call(G, "__await") ? ee.resolve(G.__await).then(function(xe) {
              fe("next", xe, Ge, Ne);
            }, function(xe) {
              fe("throw", xe, Ge, Ne);
            }) : ee.resolve(G).then(function(xe) {
              vt.value = xe, Ge(vt);
            }, function(xe) {
              return fe("throw", xe, Ge, Ne);
            });
            Ne(Xe.arg);
          })(je, Re, te, be);
        });
      }
      return Se = Se ? Se.then(me, me) : me();
    } });
  }
  function $e(K) {
    var ee = { tryLoc: K[0] };
    1 in K && (ee.catchLoc = K[1]), 2 in K && (ee.finallyLoc = K[2], ee.afterLoc = K[3]), this.tryEntries.push(ee);
  }
  function at(K) {
    var ee = K.completion || {};
    ee.type = "normal", delete ee.arg, K.completion = ee;
  }
  function st(K) {
    this.tryEntries = [{ tryLoc: "root" }], K.forEach($e, this), this.reset(!0);
  }
  function ct(K) {
    if (K || K === "") {
      var ee, Se = K[T];
      if (Se) return Se.call(K);
      if (typeof K.next == "function") return K;
      if (!isNaN(K.length)) return ee = -1, (Se = function je() {
        for (; ++ee < K.length; ) if (w.call(K, ee)) return je.value = K[ee], je.done = !1, je;
        return je.value = y, je.done = !0, je;
      }).next = Se;
    }
    throw new TypeError(typeof K + " is not iterable");
  }
  return U(pe, "constructor", { value: ot.prototype = Me, configurable: !0 }), U(Me, "constructor", { value: ot, configurable: !0 }), ot.displayName = O(Me, z, "GeneratorFunction"), S.isGeneratorFunction = function(K) {
    return K = typeof K == "function" && K.constructor, !!K && (K === ot || (K.displayName || K.name) === "GeneratorFunction");
  }, S.mark = function(K) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(K, Me) : (K.__proto__ = Me, O(K, z, "GeneratorFunction")), K.prototype = Object.create(pe), K;
  }, S.awrap = function(K) {
    return { __await: K };
  }, et(Be.prototype), O(Be.prototype, v, function() {
    return this;
  }), S.AsyncIterator = Be, S.async = function(K, ee, Se, je, Re) {
    Re === void 0 && (Re = Promise);
    var me = new Be(k(K, ee, Se, je), Re);
    return S.isGeneratorFunction(ee) ? me : me.next().then(function(te) {
      return te.done ? te.value : me.next();
    });
  }, et(pe), O(pe, z, "Generator"), O(pe, T, function() {
    return this;
  }), O(pe, "toString", function() {
    return "[object Generator]";
  }), S.keys = function(K) {
    var ee, Se = Object(K), je = [];
    for (ee in Se) je.push(ee);
    return je.reverse(), function Re() {
      for (; je.length; ) {
        var me = je.pop();
        if (me in Se) return Re.value = me, Re.done = !1, Re;
      }
      return Re.done = !0, Re;
    };
  }, S.values = ct, st.prototype = { constructor: st, reset: function(K) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = y, this.done = !1, this.delegate = null, this.method = "next", this.arg = y, this.tryEntries.forEach(at), !K) for (var ee in this) ee.charAt(0) === "t" && w.call(this, ee) && !isNaN(+ee.slice(1)) && (this[ee] = y);
  }, stop: function() {
    this.done = !0;
    var K = this.tryEntries[0].completion;
    if (K.type === "throw") throw K.arg;
    return this.rval;
  }, dispatchException: function(K) {
    if (this.done) throw K;
    var ee = this;
    function Se(fe, A) {
      return me.type = "throw", me.arg = K, ee.next = fe, A && (ee.method = "next", ee.arg = y), !!A;
    }
    for (var je = this.tryEntries.length - 1; 0 <= je; --je) {
      var Re = this.tryEntries[je], me = Re.completion;
      if (Re.tryLoc === "root") return Se("end");
      if (Re.tryLoc <= this.prev) {
        var te = w.call(Re, "catchLoc"), be = w.call(Re, "finallyLoc");
        if (te && be) {
          if (this.prev < Re.catchLoc) return Se(Re.catchLoc, !0);
          if (this.prev < Re.finallyLoc) return Se(Re.finallyLoc);
        } else if (te) {
          if (this.prev < Re.catchLoc) return Se(Re.catchLoc, !0);
        } else {
          if (!be) throw Error("try statement without catch or finally");
          if (this.prev < Re.finallyLoc) return Se(Re.finallyLoc);
        }
      }
    }
  }, abrupt: function(K, ee) {
    for (var Se = this.tryEntries.length - 1; 0 <= Se; --Se) {
      var je = this.tryEntries[Se];
      if (je.tryLoc <= this.prev && w.call(je, "finallyLoc") && this.prev < je.finallyLoc) {
        var Re = je;
        break;
      }
    }
    var me = (Re = Re && (K === "break" || K === "continue") && Re.tryLoc <= ee && ee <= Re.finallyLoc ? null : Re) ? Re.completion : {};
    return me.type = K, me.arg = ee, Re ? (this.method = "next", this.next = Re.finallyLoc, he) : this.complete(me);
  }, complete: function(K, ee) {
    if (K.type === "throw") throw K.arg;
    return K.type === "break" || K.type === "continue" ? this.next = K.arg : K.type === "return" ? (this.rval = this.arg = K.arg, this.method = "return", this.next = "end") : K.type === "normal" && ee && (this.next = ee), he;
  }, finish: function(K) {
    for (var ee = this.tryEntries.length - 1; 0 <= ee; --ee) {
      var Se = this.tryEntries[ee];
      if (Se.finallyLoc === K) return this.complete(Se.completion, Se.afterLoc), at(Se), he;
    }
  }, catch: function(K) {
    for (var ee = this.tryEntries.length - 1; 0 <= ee; --ee) {
      var Se, je, Re = this.tryEntries[ee];
      if (Re.tryLoc === K) return (Se = Re.completion).type === "throw" && (je = Se.arg, at(Re)), je;
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(K, ee, Se) {
    return this.delegate = { iterator: ct(K), resultName: ee, nextLoc: Se }, this.method === "next" && (this.arg = y), he;
  } }, S;
}
function JR(y, S) {
  return (JR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(m, w) {
    return m.__proto__ = w, m;
  })(y, S);
}
function FR(y, S) {
  return gD(y) || RD(y, S) || eT(y, S) || TD();
}
function fy(y) {
  return SD(y) || CD(y) || eT(y) || wD();
}
function kD(y, S) {
  if (typeof y != "object" || !y) return y;
  var m = y[Symbol.toPrimitive];
  if (m === void 0) return (S === "string" ? String : Number)(y);
  if (m = m.call(y, S), typeof m != "object") return m;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function oy(y) {
  return y = kD(y, "string"), typeof y == "symbol" ? y : y + "";
}
function Yr(y) {
  return (Yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(S) {
    return typeof S;
  } : function(S) {
    return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S;
  })(y);
}
function eT(y, S) {
  var m;
  if (y) return typeof y == "string" ? U_(y, S) : (m = (m = {}.toString.call(y).slice(8, -1)) === "Object" && y.constructor ? y.constructor.name : m) === "Map" || m === "Set" ? Array.from(y) : m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m) ? U_(y, S) : void 0;
}
var tT = { react: { componentWrap: "div", slotWrap: "div", componentWrapAttrs: { __use_react_component_wrap: "", style: { all: "unset" } }, slotWrapAttrs: { __use_react_slot_wrap: "", style: { all: "unset" } }, vueNamedSlotsKey: ["node:"] }, vue: { componentWrapHOC: function(y) {
  return function() {
    var S = (0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}).portals;
    return Kn.createElement(Kn.Fragment, null, y, (S === void 0 ? [] : S).map(function(m) {
      var w = m.Portal;
      return Kn.createElement(w, { key: m.key });
    }));
  };
}, componentWrapAttrs: { "data-use-vue-component-wrap": "", style: { all: "unset" } }, slotWrapAttrs: { "data-use-vue-slot-wrap": "", style: { all: "unset" } } } };
function nT() {
  var y = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : { react: {}, vue: {} }, m = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : tT, S = 2 < arguments.length ? arguments[2] : void 0, m = (y.vue || (y.vue = {}), y.react || (y.react = {}), [m, ie(ie({}, y), {}, { react: ie(ie(ie({}, m.react), y.react), {}, { componentWrapAttrs: ie(ie({}, m.react.componentWrapAttrs), y.react.componentWrapAttrs), slotWrapAttrs: ie(ie({}, m.react.slotWrapAttrs), y.react.slotWrapAttrs) }), vue: ie(ie(ie({}, m.vue), y.vue), {}, { componentWrapAttrs: ie(ie({}, m.vue.componentWrapAttrs), y.vue.componentWrapAttrs), slotWrapAttrs: ie(ie({}, m.vue.slotWrapAttrs), y.vue.slotWrapAttrs) }) })]);
  return S && m.unshift({}), Object.assign.apply(this, m);
}
var rT = ["getElementById", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "querySelector", "querySelectorAll"], Zf = { Document: {}, Element: {} };
function DD(y) {
  Object.keys(Zf).forEach(function(S) {
    rT.forEach(function(m) {
      var w = Zf[S][m] || window[S].prototype[m];
      w && (Zf[S][m] = w, window[S].prototype[m] = function() {
        for (var U = arguments.length, T = new Array(U), v = 0; v < U; v++) T[v] = arguments[v];
        var z = w.apply(this, T);
        return z && (z.constructor !== NodeList || z.constructor === NodeList && 0 < z.length) ? z : ((z = m) === "getElementById" && (z = "querySelector", T = ["#" + T[0]]), (Zf.Element[z] || Element.prototype[z]).apply(y, T));
      });
    });
  });
}
function OD() {
  Object.keys(Zf).forEach(function(y) {
    rT.forEach(function(S) {
      window[y].prototype[S] = Zf[y][S];
    });
  });
}
var LD = ["ref"], MD = ["key"], ND = ["hashList"], N_ = parseInt(H_.version);
var AD = (() => {
  function y(S) {
    return cv(this, y), sy(this, y, [S]);
  }
  return cy(y, Kn.Component), fv(y, [{ key: "render", value: function() {
    var S = this.props.component, m = this.props.passedProps, m = (m.ref, Vi(m, LD));
    return Kn.createElement(S, m, this.props.children);
  } }]);
})(), UD = function(y, S, m) {
  var w = (() => {
    function U(T) {
      var v;
      return cv(this, U), (v = sy(this, U, [T])).state = ie(ie({}, T), S.isSlots ? { children: y } : {}), v.setRef = v.setRef.bind(v), v.vueInReactCall = v.vueInReactCall.bind(v), (v.__veauryVueWrapperRef__ = m).__veauryVueInReactCall__ = v.vueInReactCall, v;
    }
    return cy(U, Kn.Component), fv(U, [{ key: "reactPropsLinkToVueInstance", value: function(T) {
      Object.keys(T).forEach(function(v) {
        m[v] || (m[v] = T[v]);
      }), Object.getOwnPropertyNames(T.__proto__).filter(function(v) {
        return ["constructor", "render"].indexOf(v) < 0;
      }).forEach(function(v) {
        m[v] || (m[v] = T[v]);
      });
    } }, { key: "setRef", value: function(T) {
      var v = this;
      T && (m.__veauryReactRef__ = T, this.reactPropsLinkToVueInstance(T), Promise.resolve().then(function() {
        return v.reactPropsLinkToVueInstance(T);
      }), (this.setRef.current = T).__veauryVueWrapperRef__ = m);
    } }, { key: "createSlot", value: function(T) {
      return { originVNode: T, inheritAttrs: !1, __fromReactSlot: !0, render: function() {
        var v, z;
        return ((v = T = (T = ((z = this.$slots) == null || (v = z.default) == null ? void 0 : v.call(z)) || T) instanceof Function ? T(this) : T) == null ? void 0 : v.length) === 1 && (z = T[0]) != null && z.data && ((v = this.$attrs).key, z = Vi(v, MD), T[0].props = ie(ie({}, z), T[0].props)), T;
      } };
    } }, { key: "componentWillUnmount", value: function() {
      m.__veauryReactRef__ && (m.__veauryReactRef__.__veauryVueWrapperRef__ = null, m.__veauryReactRef__ = null);
    } }, { key: "vueInReactCall", value: function(T) {
      var v = this, z = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return 2 < arguments.length && arguments[2] && T && T[0] ? T.map(function(O, k) {
        return ly(v.createSlot(O instanceof Function ? O : [O]), ie(ie(ie({}, S), z), {}, { isSlots: !0, wrapInstance: m })).render({ key: O?.key || void 0 });
      }) : ly(this.createSlot(T), ie(ie(ie({}, S), z), {}, { isSlots: !0, wrapInstance: m })).render();
    } }, { key: "render", value: function() {
      var T, v, z, O = this, he = this.state, k = he.hashList, Y = Vi(he, ND), W = {}, J = {};
      for (T in Y) v = T, z = void 0, Y.hasOwnProperty(v) && Y[v] != null && (Y[v].__slot ? (Y[v].reactSlot ? Y[v] = Y[v].reactSlot : (z = Y[v], S.defaultSlotsFormatter && Y[v].__trueChildren ? (Y[v].__trueChildren.__top__ = O.__veauryVueWrapperRef__, Y[v] = S.defaultSlotsFormatter(Y[v].__trueChildren, O.vueInReactCall, k), Y[v] instanceof Array ? Y[v] = fy(Y[v]) : -1 < ["string", "number"].indexOf(Yr(Y[v])) ? Y[v] = [Y[v]] : Yr(Y[v]) === "object" && (Y[v] = ie({}, Y[v]))) : Y[v] = ie({}, ly(O.createSlot(Y[v]), ie(ie({}, S), {}, { isSlots: !0, wrapInstance: m })).render()), Y[v].vueFunction = z), W[v] = Y[v]) : Y[v].__scopedSlot && (Y[v] = Y[v](O.createSlot), J[v] = Y[v]));
      var Z, ve, he = {};
      return he.ref = this.setRef, S.isSlots ? this.state.children || this.props.children : (Z = Y, y.__syncUpdateForPureReactInVue && Object.keys(y.__syncUpdateForPureReactInVue).map(function(Fe) {
        var ot, Me;
        Z[Fe] && typeof Z[Fe] == "function" && (ot = O.__veauryVueWrapperRef__, Me = Z[Fe], Z[Fe] = function() {
          for (var Ee = arguments.length, De = new Array(Ee), pe = 0; pe < Ee; pe++) De[pe] = arguments[pe];
          ot.__veaurySyncUpdateProps__(y.__syncUpdateForPureReactInVue[Fe].apply(this, De)), Me.apply(this, De), ot.macroTaskUpdate = !0, ot.__veauryMountReactComponent__(!0, !0, {});
        });
      }), ve = ie(ie(ie({}, Z = S.defaultPropsFormatter ? S.defaultPropsFormatter.call(this, Z, this.vueInReactCall, k) : Z), W), J), Object.getPrototypeOf(y) !== Function.prototype && (Yr(y) !== "object" || y.render) || U.catchVueRefs() ? (Object.getPrototypeOf(y) === Function.prototype && delete he.ref, Kn.createElement(y, cc({}, ve, he))) : Kn.createElement(AD, cc({ passedProps: ve, component: y }, he), ve.children));
    } }], [{ key: "catchVueRefs", value: function() {
      if (m.$parent) {
        for (var T in m.$parent.$refs) if (m.$parent.$refs[T] === m) return !0;
      }
      return !1;
    } }]);
  })();
  return Jf(w, "displayName", "applyReact_".concat(y.displayName || y.name || "Component")), w;
};
function B_(y) {
  var S = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  return y.__esModule && y.default && (y = y.default), S.isSlots && (y = y()), S = nT(S, void 0, !0), { originReactComponent: y, setup: function(m, w) {
    var U, T, v, z;
    if (!S.isSlots) return U = {}, T = qk({}), v = Xk(), typeof (z = S.useInjectPropsFromWrapper || y.__veauryInjectPropsFromWrapper__) == "function" && (typeof (z = z.call(v.proxy, m)) != "function" ? (Object.assign(T, z), U.__veauryInjectedProps__ = T) : v.proxy.__veauryInjectedComputed__ = z), U;
  }, data: function() {
    return { VEAURY_Portals: [] };
  }, created: function() {
    this.__veauryPortalKeyPool__ = [], this.__veauryMaxPortalCount__ = 0;
  }, computed: { __veauryInjectedProps__: function() {
    var m;
    return (m = this.__veauryInjectedComputed__) == null ? void 0 : m.call(this);
  } }, render: function() {
    var m = Kl(S.react.componentWrap, ie({ ref: "react" }, S.react.componentWrapAttrs || {}), this.VEAURY_Portals.map(function(w) {
      return (0, w.Portal)(Kl, w.key);
    }));
    return this.__veauryCheckReactSlot__(this.$slots), m;
  }, methods: { __veauryCheckReactSlot__: function(m) {
    var w = this;
    function U(T, v, z) {
      return v[z] && (T[z] = v[z], 1);
    }
    Yr(m) === "object" && m != null && (m instanceof Array ? m.forEach(function(T) {
      w.__veauryCheckReactSlot__(T.children);
    }) : Object.keys(m).forEach(function(O) {
      var v, z, O = m[O];
      if (typeof O == "function") {
        try {
          v = O.apply(w, O.__reactArgs || [{}]);
        } catch {
          return;
        }
        (O.__trueChildren = v).forEach(function(k) {
          k.children && w.__veauryCheckReactSlot__(k.children);
        }), v.length !== 1 || U(O, v = v[0], "reactSlot") || U(O, v, "reactFunction") || v.type !== GR || ((z = v.children) == null ? void 0 : z.length) !== 1 || U(O, z = v.children[0], "reactSlot") || U(O, z, "reactFunction");
      }
    }));
  }, __veauryPushVuePortal__: function(m) {
    var w = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    this.VEAURY_Portals.push({ Portal: m, key: w });
  }, __veauryRemoveVuePortal__: function(m) {
    var w, U = this.VEAURY_Portals.find(function(T, v) {
      if (T.Portal === m) return w = v, !0;
    });
    this.__veauryPortalKeyPool__.push(U.key), this.VEAURY_Portals.splice(w, 1);
  }, __veauryGetScopeSlot__: function(m, w, U) {
    var T = this;
    function v(z) {
      function O() {
        for (var k, Y = this, W = arguments.length, J = new Array(W), Z = 0; Z < W; Z++) J[Z] = arguments[Z];
        return m.reactFunction ? m.reactFunction.apply(this, J) : S.defaultSlotsFormatter ? ((k = m.apply(this, J)).__top__ = T, (k = S.defaultSlotsFormatter(k, T.__veauryVueInReactCall__, w)) instanceof Array || -1 < Yr(k).indexOf("string", "number") ? k = fy(k) : Yr(k) === "object" && (k = ie({}, k)), k) : ly(z(function() {
          return m.apply(Y, J);
        }), ie(ie({}, S), {}, { isSlots: !0, wrapInstance: T })).render();
      }
      return S.pureTransformer && U ? O.vueFunction = U : O.vueFunction = m, O;
    }
    return v.__scopedSlot = !0, v;
  }, __veaurySyncUpdateProps__: function(m) {
    this.__veauryReactInstance__ && this.__veauryReactInstance__.setState(m);
  }, __veauryMountReactComponent__: function(m, w) {
    var U = arguments, T = this;
    return ED(Xf().mark(function v() {
      var z, O, k, Y, W, J, Z, ve, he, Fe, ot, Me, Ee, De, pe, et, Be;
      return Xf().wrap(function($e) {
        for (; ; ) switch ($e.prev = $e.next) {
          case 0:
            if (z = 2 < U.length && U[2] !== void 0 ? U[2] : {}, O = {}, k = [], (ve = T.$.vnode.scopeId) && (O[ve] = "", k.push(ve)), Y = {}, W = {}, m && (w == null || !w.slot)) {
              $e.next = 18;
              break;
            }
            Z = Xf().mark(function at(st) {
              var ct;
              return Xf().wrap(function(K) {
                for (; ; ) switch (K.prev = K.next) {
                  case 0:
                    if (T.$slots.hasOwnProperty(st) && T.$slots[st] != null) {
                      K.next = 2;
                      break;
                    }
                    return K.abrupt("return", 0);
                  case 2:
                    if ((ct = S.react.vueNamedSlotsKey.find(function(ee) {
                      return st.indexOf(ee) === 0;
                    })) || st === "default") return ct = st.replace(new RegExp("^".concat(ct)), ""), Y[ct] = T.$slots[st], Y[ct].__slot = !0, K.abrupt("return", 0);
                    K.next = 8;
                    break;
                  case 8:
                    W[st] = T.__veauryGetScopeSlot__(T.$slots[st], k, (ct = T.$.vnode) == null || (ct = ct.children) == null ? void 0 : ct[st]);
                  case 9:
                  case "end":
                    return K.stop();
                }
              }, at);
            }), $e.t0 = Xf().keys(T.$slots || {});
          case 10:
            if (($e.t1 = $e.t0()).done) {
              $e.next = 18;
              break;
            }
            return ve = $e.t1.value, $e.delegateYield(Z(ve), "t2", 13);
          case 13:
            if ($e.t2 === 0) return $e.abrupt("continue", 10);
            $e.next = 16;
            break;
          case 16:
            $e.next = 10;
            break;
          case 18:
            if ((!m || w != null && w.slot) && (he = ie({}, Y), J = he.default, delete he.default), T.__veauryLast__ = T.__veauryLast__ || {}, T.__veauryLast__.slot = T.__veauryLast__.slot || {}, T.__veauryLast__.attrs = T.__veauryLast__.attrs || {}, Fe = { slot: function() {
              T.__veauryLast__.slot = ie(ie(ie({}, J ? { children: J } : { children: null }), he), W);
            }, attrs: function() {
              T.__veauryLast__.attrs = T.$attrs;
            } }, w && Object.keys(w).forEach(function(at) {
              return Fe[at]();
            }), m) {
              $e.next = 64;
              break;
            }
            if (T.__reactBoundedPromise__ = new Promise(function(at) {
              ot = at;
            }), T.__reactBoundedPromise__.resolve = ot, Fe.slot(), Fe.attrs(), De = UD(y, S, T), Me = Kn.createElement(De, cc({}, T.$attrs, T.__veauryInjectedProps__, { children: J }, he, W, T.$attrs.class ? { className: T.$attrs.class } : {}, O, { hashList: k }, T.$attrs.style ? { style: T.$attrs.style } : {}, { ref: function(at) {
              T.__veauryReactInstance__ = at, T.__reactBoundedPromise__.resolve(!0);
            } })), Ee = T.$refs.react, De = S.wrapInstance) {
              $e.next = 47;
              break;
            }
            pe = T.$parent;
          case 35:
            if (pe) {
              if (pe.parentReactWrapperRef) return De = pe.parentReactWrapperRef, $e.abrupt("break", 45);
              $e.next = 39;
            } else $e.next = 45;
            break;
          case 39:
            if (pe.reactWrapperRef) return De = pe.reactWrapperRef, $e.abrupt("break", 45);
            $e.next = 42;
            break;
          case 42:
            pe = pe.$parent, $e.next = 35;
            break;
          case 45:
            $e.next = 49;
            break;
          case 47:
            (De = S.wrapInstance).__veauryVueWrapperRef__ = T;
          case 49:
            if (De) return T.parentReactWrapperRef = De, T.reactPortal = function() {
              return H_.createPortal(Me, Ee);
            }, De.pushReactPortal(T.reactPortal), $e.abrupt("return");
            $e.next = 54;
            break;
          case 54:
            if (17 < N_) return lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== void 0 && (lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = !0), et = S.react.createRoot || lv.createRoot, 18 < N_ && !et && console.warn("'react-dom 19' no longer supports dynamically determining whether to use 'render' or 'createRoot'. In order to be compatible with 'react-dom 17' and previous versions, you need to manually configure 'createRoot' in the veaury configuration."), T.__veauryReactApp__ = et(Ee), T.__veauryReactApp__.render(Me), $e.abrupt("return");
            $e.next = 61;
            break;
          case 61:
            lv.render(Me, Ee), $e.next = 71;
            break;
          case 64:
            return $e.next = 66, T.__reactBoundedPromise__;
          case 66:
            Be = function() {
              T.__veauryReactInstance__.setState(function(at) {
                return Object.keys(at).forEach(function(st) {
                  S.isSlots && st === "children" || delete at[st];
                }), ie(ie(ie(ie({}, T.__veauryCache__), T.__veauryInjectedProps__), !S.isSlots && T.__veauryLast__.slot), T.__veauryLast__.attrs);
              }), T.__veauryCache__ = null;
            }, !T.microTaskUpdate || T.__veauryCache__ || T.$nextTick(function() {
              Be(), T.microTaskUpdate = !1;
            }), T.macroTaskUpdate && (clearTimeout(T.updateTimer), T.updateTimer = setTimeout(function() {
              clearTimeout(T.updateTimer), Be(), T.macroTaskUpdate = !1;
            })), T.__veauryCache__ = ie(ie({}, T.__veauryCache__ || {}), ie(ie(ie(ie({}, z), T.$attrs.class ? { className: T.$attrs.class } : {}), ie({}, O)), {}, { hashList: k }, T.$attrs.style ? { style: T.$attrs.style } : {})), T.macroTaskUpdate || T.microTaskUpdate || Be();
          case 71:
          case "end":
            return $e.stop();
        }
      }, v);
    }))();
  } }, mounted: function() {
    var m = this;
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ = !0, Promise.resolve().then(function() {
      m.__VEAURY_IGNORE_STRANGE_UPDATE__ = !1;
    }), clearTimeout(this.updateTimer), this.__veauryMountReactComponent__();
  }, beforeUnmount: function() {
    var m;
    clearTimeout(this.updateTimer), DD(this.$refs.react), this.reactPortal ? (m = this.parentReactWrapperRef) != null && m.removeReactPortal(this.reactPortal) : 17 < N_ ? (m = this.__veauryReactApp__) != null && m.unmount() : lv.unmountComponentAtNode(this.$refs.react), OD();
  }, updated: function() {
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ || this.__veauryMountReactComponent__(!0, { slot: !0 });
  }, inheritAttrs: !1, watch: { $attrs: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 }, __veauryInjectedProps__: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 } } };
}
var zD = /* @__PURE__ */ new Set(["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onChange", "onInput", "onInvalid", "onReset", "onSubmit", "onError", "onLoad", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd", "onToggle"]);
function jD(y, S) {
  for (var m = (y = S = y?._reactInternals || y?._reactInternalFiber || S) == null ? void 0 : y.return; m; ) {
    var w = m.stateNode;
    if (w = w?.parentVueWrapperRef || w?.__veauryVueWrapperRef__) return w;
    m = m.return;
  }
}
function PR(y, S, m) {
  var w = {};
  return m.forEach(function(U) {
    w[U] = !0;
  }), y[(S === "modelValue" ? "model" : S) + "Modifiers"] = w;
}
function VR(y, S, m) {
  var w = this, U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "v-model";
  if (!(S instanceof Array)) throw Error("[error:veaury] Parameter type error from '".concat(U, "', a single v-model is an array, such as [val, setter, argumentKey, modifiers] or [val, setter, modifiers]"));
  if (typeof S[1] != "function") throw Error("[error:veaury] Parameter type error from '".concat(U, "', a single v-model is an array, the second element of the array must be a setter function"));
  var T = S[1], v = (typeof S[2] == "string" ? (m = S[2], S[3] instanceof Array && PR(y, m, S[3])) : S[2] instanceof Array && PR(y, m, S[2]), y["onUpdate:" + m]);
  y["onUpdate:" + m] = typeof v == "function" ? function() {
    for (var z = arguments.length, O = new Array(z), k = 0; k < z; k++) O[k] = arguments[k];
    v.apply(w, O), T.apply(w, O);
  } : T, y[m] = S[0];
}
function j_(y) {
  var S = this, m = {}, w = ie({}, y);
  return Object.keys(y).forEach(function(U) {
    var T, v = U.match(/^onUpdate-([^-]+)/);
    if (v) delete w[U], T = m["onUpdate:".concat(v[1])], m["onUpdate:".concat(v[1])] = typeof T == "function" ? function() {
      for (var O = arguments.length, k = new Array(O), Y = 0; Y < O; Y++) k[Y] = arguments[Y];
      T.apply(S, k), y[U].apply(S, k);
    } : y[U];
    else if (v = U.match(/^v-model($|:([^:]+)|-([^:]+))/)) v = v[2] || v[3] || "modelValue", VR(m, y[U], v), delete w[U];
    else if (U === "v-models") {
      if (Yr(y[U]) !== "object" || y[U] instanceof Array) throw Error("[error:veaury] The parameter 'v-models' must be an object type, such as {[argumentKey]: singleVModel}");
      var z = y[U];
      Object.keys(z).forEach(function(O) {
        VR(m, z[O], O, "v-models");
      }), delete w[U];
    }
  }), ie(ie({}, w), m);
}
var dy = fv(function y() {
  cv(this, y), Jf(this, "pool", /* @__PURE__ */ new Set());
}, [{ key: "getRandomId", value: function(y) {
  var S = y + (Math.random() + "").substr(2);
  return this.pool.has(S) ? this.getRandomId(y) : (this.pool.add(S), S);
} }]);
function aT(w, S) {
  var m, w = w.node;
  if (typeof w == "function" && (w = w()), (m = S) != null && m.current || typeof S == "function" || (m = S) != null && m.toString().match(/^function/) || (S = null), -1 < ["string", "number"].indexOf(Yr(w))) return w;
  if (w instanceof Array) {
    if (w.length !== 1) return w;
    w = w[0];
  }
  return ie(ie({}, w), {}, { ref: S });
}
var FD = B_(aT);
function F_(y) {
  return Kl(FD, { node: function() {
    return y.node;
  } });
}
F_.originReactComponent = Kn.forwardRef(aT);
var PD = ["component", "node"], VD = ["component", "$slots", "children", "class", "style"], HD = ["className", "classname"], sc = "veaury-options", HR = new dy();
function BD(y, S) {
  var m;
  return y = typeof y == "string" && S ? (S = S.$) == null || (S = S.appContext) == null || (S = S.app) == null || (m = S.component) == null ? void 0 : m.call(S, y) : y;
}
function BR(y) {
  if (y) return Object.keys(y).forEach(function(S) {
    var m = y[S];
    m != null && (typeof m == "function" ? (y[S] = m, y[S].reactFunction = m) : (y[S] = function() {
      return m;
    }, y[S].reactSlot = m), m.vueFunction) && (y[S].vueFunction = m.vueFunction);
  }), y;
}
function ID(y) {
  var S;
  return (S = y.node) == null ? void 0 : S.call(y);
}
var P_ = Kn.forwardRef(function(U, S) {
  var m, v = U.component, w = U.node, U = Vi(U, PD);
  if (v == null && w == null) return null;
  if (w != null) {
    if (w.$$typeof || typeof w == "string" || typeof w == "number") return w;
    typeof w != "function" && (m = w, w = function() {
      return m;
    });
  }
  var T, v = v || ID, z = nT(U[sc] || {}, void 0, !0), O = z.useInjectPropsFromWrapper || v.__veauryInjectPropsFromWrapper__;
  return z.isSlots || typeof O == "function" && (T = O(U)), Kn.createElement($D, cc({}, ie(ie(ie(ie({ component: v }, w ? { node: w } : {}), U), T), {}, Jf({}, sc, z)), { ref: S }));
}), $D = (() => {
  function y(S) {
    var m;
    return cv(this, y), (m = sy(this, y, [S])).state = { portals: [] }, m.__veauryPortalKeyPool__ = [], m.__veauryMaxPortalCount__ = 0, m.__veauryCurrentVueComponent__ = S.component, m.__veauryCreateVueInstance__ = m.__veauryCreateVueInstance__.bind(m), m.__veauryVueComponentContainer__ = m.createVueComponentContainer(), m;
  }
  return cy(y, Kn.Component), fv(y, [{ key: "pushReactPortal", value: function(S) {
    var m = this.state.portals, w = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    m.push({ Portal: S, key: w }), this.setState({ portals: m });
  } }, { key: "removeReactPortal", value: function(S) {
    var m, w = this.state.portals, U = w.find(function(T, v) {
      if (T.Portal === S) return m = v, !0;
    });
    this.__veauryPortalKeyPool__.push(U.key), w.splice(m, 1), this.__veauryVueRef__ && this.setState({ portals: w });
  } }, { key: "createVueComponentContainer", value: function() {
    var S = this, m = {}, w = this.props[sc];
    return w.isSlots ? (Object.keys(this.props).forEach(function(U) {
      zD.has(U) && typeof S.props[U] == "function" && (m[U] = S.props[U]);
    }), w.vue.slotWrapAttrs && (m = ie(ie({}, m), w.vue.slotWrapAttrs))) : w.vue.componentWrapAttrs && (m = ie(ie({}, m), w.vue.componentWrapAttrs)), w.vue.componentWrapHOC(Kn.createElement("div", cc({}, w.vue.componentWrapAttrs, { ref: this.__veauryCreateVueInstance__, key: null })), m);
  } }, { key: "shouldComponentUpdate", value: function(S, m, w) {
    var U, T, v, z, O = this;
    return S === this.props || (U = S.component, T = (T = S["v-slots"]) === void 0 ? null : T, v = S.children, S = Vi(S, ["component", sc, "v-slots", "children"].map(oy)), this.__veauryCurrentVueComponent__ !== U && this.updateVueComponent(U), U.__fromReactSlot) || this.__veauryVueInstance__ && (v && (T = T || {}, Yr(v) !== "object" || v instanceof Array || v.$$typeof ? T.default = v : T = v), (z = this.__veauryVueInstance__.$data.$slots) && Object.keys(z).forEach(function(k) {
      delete z[k];
    }), T && (z || (this.__veauryVueInstance__.$data.$slots = {}), Object.assign(this.__veauryVueInstance__.$data.$slots, BR(T))), Object.keys(this.__veauryVueInstance__.$data).forEach(function(k) {
      k !== "$slots" && delete O.__veauryVueInstance__.$data[k];
    }), this.__veauryVueInstance__) && Object.assign(this.__veauryVueInstance__.$data, j_(S)), !0;
  } }, { key: "componentWillUnmount", value: function() {
    this.vuePortal ? this.parentVueWrapperRef.__veauryRemoveVuePortal__(this.vuePortal) : (this.__veauryVueInstance__ && this.__veauryVueInstance__.$.appContext.app.unmount(), HR.pool.delete(this.__veauryVueTargetId__), this.vueCreated = !1);
  } }, { key: "componentDidMount", value: function() {
    this.__veauryCreateVueInstance__(this.vueContainerElement);
  } }, { key: "__veauryCreateVueInstance__", value: function(S) {
    var m, w, U, T, v, z, O, k, Y = this;
    function W(J) {
      this.__veauryVueInstance__ || (this.__veauryVueInstance__ = J);
    }
    this.vueCreated || (this.vueCreated = !0, (m = this).vueContainerElement = S, (U = this.props).component, w = U[sc], O = U.children, k = (k = U["v-slots"]) === void 0 ? {} : k, U = Vi(U, ["component", sc, "children", "v-slots"].map(oy)), O && (Yr(O) !== "object" || O instanceof Array || O.$$typeof ? k.default = O : k = O), (k = BR(k)) && (U.$slots = k), W = W.bind(this), T = ie({}, j_(U)), v = { data: function() {
      return w.isSlots ? { children: m.__veauryCurrentVueComponent__.originVNode } : T;
    }, created: function() {
      this.reactWrapperRef = m, W(this);
    }, methods: { reactInVueCall: function(J) {
      return 2 < arguments.length && arguments[2] && J && J[0] ? J.map(function(Z, ve) {
        return Kl(F_, { node: Z, key: (Z == null || (Z = Z.data) == null ? void 0 : Z.key) || ve });
      }) : Kl(F_, { node: J });
    }, getScopedSlots: function(J, Z) {
      var ve, he = this, Fe = (this.getScopedSlots.__scopeSlots || (this.getScopedSlots.__scopeSlots = {}), ie({}, Z));
      for (ve in Fe) ((ot) => {
        var Me, Ee;
        !Fe.hasOwnProperty(ot) || (Me = Fe[ot]) == null || (Fe[ot] = (Ee = Me, function() {
          for (var De, pe, et, Be, $e = arguments.length, at = new Array($e), st = 0; st < $e; st++) at[st] = arguments[st];
          return Ee.vueFunction ? Ee.vueFunction.apply(he, at) : (et = Ee.reactFunction, et = Ee.reactSlot || et?.apply(he, at), Be = w.defaultSlotsFormatter, (De = he.getScopedSlots.__scopeSlots[ot]) != null && (De = De.component) != null && (De = De.ctx) != null && De.__veauryReactInstance__ ? (pe = he.getScopedSlots.__scopeSlots[ot], Promise.resolve().then(function() {
            var ct;
            (ct = pe) != null && (ct = ct.component) != null && (ct = ct.ctx) != null && (ct = ct.__veauryReactInstance__) != null && ct.setState({ children: Ee.apply(he, at) });
          })) : (pe = Be && et ? [Be(et, he.reactInVueCall)] : J(B_(function() {
            return Ee.apply(he, at);
          }, ie(ie({}, w), {}, { isSlots: !0, wrapInstance: m }))), he.getScopedSlots.__scopeSlots[ot] = pe), Ee.reactFunction ? pe.reactFunction = Ee.reactFunction : Ee.reactSlot && (pe.reactSlot = Ee.reactSlot), pe);
        }), Fe[ot].reactFunction = Me);
      })(ve);
      return Fe;
    } }, mounted: function() {
      S.removeAttribute("id"), m.__veauryVueRef__ = this.$refs.use_vue_wrapper, this.$refs.use_vue_wrapper.reactWrapperRef = m;
    }, beforeUnmount: function() {
      m.__veauryVueRef__ = null, this.$refs.use_vue_wrapper.reactWrapperRef = null;
    }, render: function() {
      var J = this, Me = this.$data, Fe = (Me.component, Me.$slots), Z = Me.class, ve = Me.style, Me = Vi(Me, VD), he = this.getScopedSlots(Kl, ie({}, Fe)), Fe = Me.className, ot = Me.classname, Me = Vi(Me, HD), Ee = {};
      return Object.keys(he).forEach(function(De) {
        var pe = he[De];
        Ee[De] = typeof pe == "function" ? pe : function() {
          return pe;
        };
      }), Kl(BD(m.__veauryCurrentVueComponent__, this), ie(ie(ie(ie({}, Me), Z || Fe || ot ? { class: Z || Fe || ot } : {}), ve ? { style: ve } : {}), {}, { ref: "use_vue_wrapper" }), ie({}, w.isSlots && this.children ? { default: typeof this.children == "function" ? this.children : function() {
        return J.children;
      } } : ie({}, Ee)));
    } }, S && (z = HR.getRandomId("__vue_wrapper_container_"), S.id = z, this.__veauryVueTargetId__ = z, (O = w.wrapInstance) ? (O = w.wrapInstance).reactWrapperRef = m : O = jD(this), O && document.getElementById(z) ? (this.parentVueWrapperRef = O, this.vuePortal = function(J, Z) {
      return J(Zk, { to: "#" + z, key: z }, [J(Object.assign(v, { router: Y._router }))]);
    }, O.__veauryPushVuePortal__(this.vuePortal)) : (k = Jk(v), typeof w.beforeVueAppMount == "function" && w.beforeVueAppMount(k), this.__veauryVueInstance__ = k.mount(S))));
  } }, { key: "updateVueComponent", value: function(S) {
    this.__veauryVueInstance__ && (S.__fromReactSlot ? this.__veauryVueInstance__.children = typeof S.originVNode == "function" ? S.originVNode : function() {
      return S.originVNode;
    } : (this.__veauryCurrentVueComponent__ = S, this.__veauryVueInstance__.$forceUpdate()));
  } }, { key: "render", value: function() {
    return Kn.createElement(this.__veauryVueComponentContainer__, { portals: this.state.portals });
  } }]);
})();
function ly(y) {
  var S = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, m = (y || console.warn("Component must be passed in applyVueInReact!"), y.__esModule && y.default && (y = y.default), Kn.forwardRef(function(w, U) {
    return Kn.createElement(P_, cc({}, w, { component: y, ref: U }, Jf({}, sc, S)));
  }));
  return m.originVueComponent = y, m;
}
new dy();
function YD(y) {
  var S = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, m = S.globalName, w = B_(y, S.combinedOption || {});
  return w.install = function(U) {
    var T = (1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}).globalName;
    return m && U.component(T || m, w), w;
  }, w;
}
function IR(y) {
  return y.replace(/-(\w)/g, function(S, m) {
    return m.toUpperCase();
  });
}
function py(y) {
  var S;
  return y ? typeof y == "string" ? (y = y.trim()).split(/\s*;\s*/).reduce(function(m, w) {
    return w && (w = w.split(/\s*:\s*/)).length === 2 && Object.assign(m, Jf({}, IR(w[0]), w[1])), m;
  }, {}) : Yr(y) === "object" ? (S = {}, Object.keys(y).forEach(function(m) {
    S[IR(m)] = y[m];
  }), S) : {} : {};
}
function vy(y) {
  return y ? y instanceof Array ? y : typeof y == "string" ? (y = y.trim()).split(/\s+/) : Yr(y) === "object" ? Object.keys(y).filter(function(S) {
    return !!y[S];
  }) : [] : [];
}
var WD = ["ref"];
function QD(y, S, m, w, U) {
  var T = y.props || {}, T = (T.ref, Vi(T, WD)), v = {}, z = (Object.keys(y.children || {}).forEach(function(Y) {
    var W = y.children[Y], J = tT.react.vueNamedSlotsKey.find(function(Z) {
      return Y.indexOf(Z) === 0;
    });
    J || Y === "default" ? (J = Y.replace(new RegExp("^".concat(J)), "").replace(/^default$/, "children"), v[J] = w.call(y.__top__, W(), m, U)) : typeof W == "function" && (v[Y] = function() {
      for (var Z = arguments.length, ve = new Array(Z), he = 0; he < Z; he++) ve[he] = arguments[he];
      return W.__reactArgs = ve, w(W.apply(this, ve), m, U);
    });
  }), {}), O = py(T.style), k = Array.from(new Set(vy(T.class))).join(" ");
  return 0 < Object.keys(O).length && (z.style = O), k !== "" && (z.className = k), Object.assign(T, ie(ie({}, z), v)), delete T.class, typeof T.ref_for == "boolean" && delete T.ref_for, T;
}
function $R(y) {
  return y.type === tD;
}
new dy();
function iT(y, S) {
  var m;
  return 0 < ((m = y.dirs) == null ? void 0 : m.length) ? Kn.createElement(GD, { vnode: y }, S) : S;
}
var GD = (() => {
  function y(S) {
    var m;
    return cv(this, y), (m = sy(this, y, [S])).state = { prevVnode: null, savedDirectives: [], ref: null, prevProps: S }, m;
  }
  return cy(y, Kn.Component), fv(y, [{ key: "findDirectiveName", value: function(S) {
    var m = S.dir, w = -1;
    return [this.state.savedDirectives.find(function(U, T) {
      if (U.dir === m) return w = T, !0;
    }), w];
  } }, { key: "doDirective", value: function() {
    var S = this, T = this.state, m = T.savedDirectives;
    if (!(w = T.ref)) {
      for (var w = (this._reactInternals || this._reactInternalFiber).child; w && w.tag !== 5; ) w = w.child;
      if (!w) return;
      w = w.stateNode;
    }
    var U = this.props.vnode, T = U.dirs;
    T && (T.forEach(function(v) {
      var z, O, k, Y, W, J, Z;
      v && (Z = (z = FR(S.findDirectiveName(v), 2))[0], z = z[1], O = (W = v.dir).created, k = W.beforeMount, Y = W.mounted, J = W.beforeUpdate, W = W.updated, Z ? (m[z] = ie(ie(ie({}, Z), v), {}, { oldValue: Z.oldValue }), Z = [w, m[z], U, S.state.prevVnode], J?.apply(null, Z), W?.apply(null, Z), m[z].oldValue = v.value) : (m.push(v), J = [w, v, U, null], O?.apply(null, J), k?.apply(null, J), Y?.apply(null, J), v.oldValue = v.value));
    }), this.setState({ prevVnode: ie({}, U), savedDirectives: m, ref: w }));
  } }, { key: "componentDidMount", value: function() {
    this.doDirective();
  } }, { key: "componentDidUpdate", value: function(S) {
    S.vnode !== this.props.vnode && this.doDirective();
  } }, { key: "componentWillUnmount", value: function() {
    var S = this, m = this.props.vnode, v = this.state, w = v.savedDirectives, U = v.ref, T = v.prevVnode, v = m.dirs;
    v && (v.forEach(function(z) {
      var O, k, Y, W;
      z && (O = (W = FR(S.findDirectiveName(z), 2))[0]) && (k = (Y = z.dir).beforeUnmount, Y = Y.unmounted, w[W[1]] = ie(ie({}, O), z), W = [U, O, m, T], k?.apply(null, W), Y != null) && Y.apply(null, W);
    }), this.setState({ prevVnode: ie({}, m), savedDirectives: w }));
  } }, { key: "render", value: function() {
    var S = this.props;
    return S.vnode, S.children;
  } }]);
})();
function KD(y, S) {
  var m;
  return typeof y == "function" && (m = y.toString(), y.prototype !== void 0) && y.prototype.constructor === y && (m.slice(0, 5) == "class" || 2 <= Object.getOwnPropertyNames(y.prototype).length || !/^function\s+\(|^function\s+anonymous\(/.test(m) && (!(!S || !/^function\s+[A-Z]/.test(m)) || !!/\b\(this\b|\bthis[\.\[]\b/.test(m) && (!(S && !/classCallCheck\(this/.test(m)) || /^function\sdefault_\d+\s*\(/.test(m))));
}
function uT(y, S) {
  var m, w, U, T;
  return typeof ((U = y.type) == null ? void 0 : U.originReactComponent) != "function" || KD((U = y.type) == null ? void 0 : U.originReactComponent) ? ((U = y.ref) != null && U.k ? (m = (U = y.ref) == null ? void 0 : U.k, w = (U = y.ref) == null ? void 0 : U.r) : m = (U = y.ref) == null ? void 0 : U.r, m && typeof m == "string" && (T = m, m = function(v) {
    var z;
    (z = y.ref) != null && (z = z.i) != null && z.refs && ((z = ie({}, y.ref.i.refs))[T] = v, y.ref.i.refs = z), w ? w.value = v : y.ref.i.setupState && T in y.ref.i.setupState && (y.ref.i.setupState[T] = v), v && (v.__syncUpdateProps = function() {
      S.__top__ && (y.__extraData = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, S.__top__.__syncUpdateProps({}));
    });
  }, m = new Proxy(m, { get: function(v, z) {
    return v[z];
  }, set: function(v, z, O) {
    var k;
    return (k = y.ref) != null && (k = k.i) != null && k.refs && T in ((k = y.ref) == null || (k = k.i) == null ? void 0 : k.refs) && ((k = ie({}, y.ref.i.refs))[z] = O, y.ref.i.refs = k), O;
  } })), m) : null;
}
function V_(y, S) {
  return !S || S instanceof Array && S.length === 0 || (typeof S == "string" && (S = [S]), (y = ie({}, y)).props = ie({}, y.props), S.forEach(function(m) {
    y.props[m] = "";
  })), y;
}
var qD = ["style", "class"];
function YR(y, S, m, w, U, T, v) {
  var z, O, k;
  return S === "all" || S instanceof Array || (S = S ? [S] : []), y.type === GR ? U.call(v, y.children, m, T) : typeof y.type == "string" && (S === "all" || -1 < S.indexOf(y.type)) ? (S = uT(y), k = (O = y.props || {}).style, z = O.class, O = ie(ie({}, Vi(O, qD)), {}, { style: py(k), className: Array.from(new Set(vy(z))).join(" ") }, S ? { ref: S } : {}), (k = y.children || O.children) && ((k = -1 < ["string", "number"].indexOf(Yr(k)) ? [k] : fy(k)).__top__ = v), iT(y, V_(qR.createElement(y.type, O, U.call(v, k, m, T)), y.scopeId))) : m([y], null, w);
}
function XD() {
  var y = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, S = 1 < arguments.length ? arguments[1] : void 0, m = 2 < arguments.length ? arguments[2] : void 0;
  return m.__syncUpdateForPureReactInVue && Object.keys(m.__syncUpdateForPureReactInVue).map(function(w) {
    var U;
    y[w] && typeof y[w] == "function" && S.__top__ && (U = y[w], y[w] = function() {
      for (var T = arguments.length, v = new Array(T), z = 0; z < T; z++) v[z] = arguments[z];
      S.__extraData = m.__syncUpdateForPureReactInVue[w].apply(this, v), S.__top__.__veaurySyncUpdateProps__({}), S.__top__.macroTaskUpdate = !0, U.apply(this, v), S.__top__ && Promise.resolve().then(function() {
        S.__extraData = null, S.__top__.__veauryMountReactComponent__(!0);
      });
    });
  }), y;
}
function WR(y, S, m) {
  return !((y = y instanceof Array && y.length === 1 ? y[0] : y) instanceof Array) && y.key == null && 1 < S.length && ((y = ie({}, y)).key = "_key_".concat(m)), y;
}
function lT(w) {
  var S = w.reactComponents, m = w.domTags, w = w.division, U = w === void 0 || w;
  return function T(v, z, O) {
    var k;
    return v && v.forEach ? (v.__top__ || (v.__top__ = this), k = [], v.forEach(function(Y, W) {
      if (Y && Y.type !== eD) {
        if ((ve = Y.type) == null || !ve.originReactComponent) return Y.$$typeof || typeof Y == "string" || typeof Y == "number" ? void k.push(Y) : $R(Y) ? void (Y.children.trim() !== "" && k.push(Y.children.trim())) : void (Y.type && (V_(ve = WR(YR(Y, m, z, U, T, O, v.__top__), v, W), Y.scopeId), k.push(ve)));
        var J, Z, ve = Y.type.originReactComponent;
        V_(J = WR(J = (S = S === "all" || S instanceof Array ? S : [S]) === "all" || -1 < S.indexOf(ve) ? (Y.__top__ = v.__top__, J = QD(Y, "_key_".concat(W), z, T, O), Z = uT(Y, v), Y.children && (Y.children.__top__ = v.__top__), iT(Y, qR.createElement(ve, ie(ie(ie({}, XD(J, Y, ve)), Y.__extraData || {}), Z ? { ref: Z } : {})))) : $R(Y) ? Y.text : YR(Y, m, z, U, T, O), v, W), Y.scopeId), k.push(J);
      }
    }), k.length === 1 ? k[0] : k) : v;
  };
}
var A_ = lT({ reactComponents: "all", domTags: "all" });
function ZD(y, S) {
  return YD(y, { combinedOption: ie({ pureTransformer: !0, defaultSlotsFormatter: A_, defaultPropsFormatter: function(m, w, U) {
    var T = {};
    return Object.keys(m).forEach(function(v) {
      var z = m[v];
      z && (z.vueFunction ? (T[v] = function() {
        for (var O = arguments.length, k = new Array(O), Y = 0; Y < O; Y++) k[Y] = arguments[Y];
        return A_(z.vueFunction.apply(this, k), w, U);
      }, Object.defineProperty(T[v], "length", { get: function() {
        return z.vueFunction.length;
      } })) : z.vueSlot && (T[v] = A_(z.vueSlot, w, U)));
    }), Object.assign(m, T);
  } }, S) });
}
lT({ reactComponents: "all", domTags: "all" });
var JD = ["ref", "children", "v-slots"];
function eO(O, S, m, w, U) {
  var O = O.props || {}, k = (O.ref, O.children), v = O["v-slots"], T = v === void 0 ? {} : v, v = Vi(O, JD), z = (k && (Yr(k) !== "object" || k instanceof Array || k.$$typeof ? T.default = k : T = k), null), O = (Object.keys(T || {}).forEach(function(W) {
    var J = T[W];
    (z = z || {})[W] = function() {
      if (typeof J == "function") {
        for (var Z = arguments.length, ve = new Array(Z), he = 0; he < Z; he++) ve[he] = arguments[he];
        J = J.apply(this, ve);
      }
      return w(J, m, U);
    };
  }), {}), k = py(v.style), Y = Array.from(new Set(vy(v.className))).join(" ");
  return 0 < Object.keys(k).length && (O.style = k), Y !== "" && (O.class = Y), Object.assign(v, ie({}, O)), delete v.className, { props: v = j_(v), slots: z };
}
function oT(y) {
  var S = y.ref;
  if (S) return Yr(S) === "object" ? function(m) {
    y.ref.current = m;
  } : typeof S == "function" ? S : void 0;
}
var tO = ["style", "class", "children"];
function QR(y, S, m, w, U, T) {
  var v, z, O, k;
  return S === "all" || S instanceof Array || (S = S ? [S] : []), y.type === Kn.Fragment ? U((v = y.props) == null ? void 0 : v.children, m) : typeof y.type == "string" && (S === "all" || -1 < S.indexOf(y.type)) ? (v = oT(y), k = (S = y.props || {}).style, O = S.class, z = S.children, S = Vi(S, tO), O = Array.from(new Set(vy(O))).join(" "), k = py(k), S = ie(ie(ie(ie({}, S), Object.keys(k).length === 0 ? {} : { style: k }), O ? { className: O } : {}), v ? { ref: v } : {}), Object.keys(S).length === 0 && (S = null), (k = z) && ((k = -1 < ["string", "number"].indexOf(Yr(k)) ? [k] : k instanceof Array ? fy(k) : ie({}, k)).__top__ = T), Kl(y.type, S, U(k, m))) : m([y], null, w);
}
function sT(w) {
  var S = w.vueComponents, m = w.domTags, w = w.division, U = w === void 0 || w;
  return function T(v, z) {
    if (v == null) return v;
    v instanceof Array || (v = [v]);
    var O = [];
    return v.forEach(function(k, Y) {
      if (((W = k.type) == null || !W.originVueComponent) && k.type !== P_) return k.__v_isVNode || typeof k == "string" || typeof k == "number" ? void O.push(k) : void (k.type && (W = QR(k, m, z, U, T, v.__top__), O.push(W)));
      var W = k.type.originVueComponent;
      if (k.type === P_) {
        if (!k.props.component) return void O.push(k.props.node);
        W = k.props.component, k = ie({}, k);
        var J = ie({}, k.props);
        delete J.component, k.props = J;
      }
      W = (S = S === "all" || S instanceof Array ? S : [S]) === "all" || -1 < S.indexOf(W) ? ((k = ie({}, k)).__top__ = v.__top__, Y = (J = eO(k, "_key_".concat(Y), z, T)).props, J = J.slots, oT(k), k.children && (k.children.__top__ = v.__top__), Kl(W, ie({}, Y), J)) : QR(k, m, z, U, T), O.push(W);
    }), (O = O.flat(1 / 0)).length === 1 ? O[0] : O;
  };
}
sT({ vueComponents: "all", domTags: "all" });
sT({ reactComponents: "all", domTags: "all" });
new dy();
const nO = /* @__PURE__ */ nD({
  __name: "CopilotApp",
  setup(y) {
    const S = ZD(dD);
    return (m, w) => (aD(), rD(iD(S)));
  }
}), lO = {
  install(y) {
    y.component("CopilotApp", nO);
  }
};
export {
  nO as CopilotApp,
  lO as default
};
