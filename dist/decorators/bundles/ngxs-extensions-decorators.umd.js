(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngxs/store'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@ngxs-extensions/decorators', ['exports', '@angular/core', '@ngxs/store', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["ngxs-extensions"] = global["ngxs-extensions"] || {}, global["ngxs-extensions"].decorators = {}), global.ng.core, global["ngxs-store"], global.rxjs));
})(this, (function (exports, i0, store, rxjs) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var InjectorAccessorService = /** @class */ (function () {
        function InjectorAccessorService(injector) {
            InjectorAccessorService.injector = injector;
        }
        InjectorAccessorService.getInjector = function () {
            if (this.injector === null) {
                throw new Error('"NgxsExtensionsDecoratorsModule" is not imported.');
            }
            return this.injector;
        };
        return InjectorAccessorService;
    }());
    InjectorAccessorService.injector = null;
    /** @nocollapse */ InjectorAccessorService.ɵfac = function InjectorAccessorService_Factory(t) { return new (t || InjectorAccessorService)(i0__namespace.ɵɵinject(i0__namespace.Injector)); };
    /** @nocollapse */ InjectorAccessorService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: InjectorAccessorService, factory: InjectorAccessorService.ɵfac });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(InjectorAccessorService, [{
                type: i0.Injectable
            }], function () { return [{ type: i0__namespace.Injector }]; }, null);
    })();

    var NgxsExtensionsDecoratorsModule = /** @class */ (function () {
        function NgxsExtensionsDecoratorsModule(injectorAccessorService) {
            this.injectorAccessorService = injectorAccessorService;
        }
        NgxsExtensionsDecoratorsModule.forRoot = function () {
            return {
                ngModule: NgxsExtensionsDecoratorsModule,
                providers: [InjectorAccessorService],
            };
        };
        return NgxsExtensionsDecoratorsModule;
    }());
    /** @nocollapse */ NgxsExtensionsDecoratorsModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: NgxsExtensionsDecoratorsModule });
    /** @nocollapse */ NgxsExtensionsDecoratorsModule.ɵinj = i0__namespace.ɵɵdefineInjector({ factory: function NgxsExtensionsDecoratorsModule_Factory(t) { return new (t || NgxsExtensionsDecoratorsModule)(i0__namespace.ɵɵinject(InjectorAccessorService, 2)); } });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(NgxsExtensionsDecoratorsModule, [{
                type: i0.NgModule
            }], function () {
            return [{ type: InjectorAccessorService, decorators: [{
                            type: i0.Self
                        }] }];
        }, null);
    })();

    /** Used to generate unique IDs. */
    var idCounter = {};
    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @param prefix The value to prefix the ID with.
     * @returns Returns the unique ID.
     * @example
     *
     * uniqueId('contact_')
     * // => 'contact_104'
     *
     * uniqueId()
     * // => '105'
     */
    function uniqueId(prefix) {
        if (prefix === void 0) { prefix = '$ids$'; }
        if (!idCounter[prefix]) {
            idCounter[prefix] = 0;
        }
        var id = ++idCounter[prefix];
        if (prefix === '$ids$') {
            return "" + id;
        }
        return "" + (prefix + id);
    }

    /**
     * Decorator to reset state to default on method call.
     *
     * @param stateClass state to get defaults from
     */
    function ResetStateToDefault(stateClass) {
        return function (target, key, descriptor) {
            // create meta data
            var id = uniqueId();
            var fn = "resetAction" + id;
            var type = "[" + stateClass.name + "] ResetAction-" + id;
            var meta = store.ensureStoreMetadata(stateClass);
            if (meta.actions.hasOwnProperty(type)) {
                throw new Error("Method decorated with such type `" + type + "` already exists");
            }
            // set action handler on state class
            stateClass.prototype[fn] = function (_a) {
                var setState = _a.setState;
                setState(meta.defaults);
            };
            // set meta data
            meta.actions[type] = [
                {
                    fn: fn,
                    options: {},
                    type: type,
                },
            ];
            // wrap original function to call dispatch after method has finished
            var original = descriptor.value;
            function dispatch() {
                InjectorAccessorService.getInjector()
                    .get(store.Store)
                    .dispatch({ type: type });
            }
            function wrapper() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var result = original.apply(this, args);
                // handle observable
                if (result instanceof rxjs.Observable) {
                    result.toPromise().then(dispatch);
                    return result;
                }
                // handle promise
                if (result instanceof Promise) {
                    return result.then(dispatch);
                }
                // handle sync call
                dispatch();
                return result;
            }
            descriptor.value = wrapper;
            // return descriptor
            return descriptor;
        };
    }

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgxsExtensionsDecoratorsModule = NgxsExtensionsDecoratorsModule;
    exports.ResetStateToDefault = ResetStateToDefault;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngxs-extensions-decorators.umd.js.map
