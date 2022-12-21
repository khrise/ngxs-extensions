import * as i0 from '@angular/core';
import { Injectable, NgModule, Self } from '@angular/core';
import { ensureStoreMetadata, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

class InjectorAccessorService {
    constructor(injector) {
        InjectorAccessorService.injector = injector;
    }
    static getInjector() {
        if (this.injector === null) {
            throw new Error('"NgxsExtensionsDecoratorsModule" is not imported.');
        }
        return this.injector;
    }
}
InjectorAccessorService.injector = null;
/** @nocollapse */ InjectorAccessorService.ɵfac = function InjectorAccessorService_Factory(t) { return new (t || InjectorAccessorService)(i0.ɵɵinject(i0.Injector)); };
/** @nocollapse */ InjectorAccessorService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: InjectorAccessorService, factory: InjectorAccessorService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InjectorAccessorService, [{
        type: Injectable
    }], function () { return [{ type: i0.Injector }]; }, null); })();

class NgxsExtensionsDecoratorsModule {
    constructor(injectorAccessorService) {
        this.injectorAccessorService = injectorAccessorService;
    }
    static forRoot() {
        return {
            ngModule: NgxsExtensionsDecoratorsModule,
            providers: [InjectorAccessorService],
        };
    }
}
/** @nocollapse */ NgxsExtensionsDecoratorsModule.ɵfac = function NgxsExtensionsDecoratorsModule_Factory(t) { return new (t || NgxsExtensionsDecoratorsModule)(i0.ɵɵinject(InjectorAccessorService, 2)); };
/** @nocollapse */ NgxsExtensionsDecoratorsModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: NgxsExtensionsDecoratorsModule });
/** @nocollapse */ NgxsExtensionsDecoratorsModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxsExtensionsDecoratorsModule, [{
        type: NgModule
    }], function () { return [{ type: InjectorAccessorService, decorators: [{
                type: Self
            }] }]; }, null); })();

/** Used to generate unique IDs. */
const idCounter = {};
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
function uniqueId(prefix = '$ids$') {
    if (!idCounter[prefix]) {
        idCounter[prefix] = 0;
    }
    const id = ++idCounter[prefix];
    if (prefix === '$ids$') {
        return `${id}`;
    }
    return `${prefix + id}`;
}

/**
 * Decorator to reset state to default on method call.
 *
 * @param stateClass state to get defaults from
 */
function ResetStateToDefault(stateClass) {
    return function (target, key, descriptor) {
        // create meta data
        const id = uniqueId();
        const fn = `resetAction${id}`;
        const type = `[${stateClass.name}] ResetAction-${id}`;
        const meta = ensureStoreMetadata(stateClass);
        if (meta.actions.hasOwnProperty(type)) {
            throw new Error(`Method decorated with such type \`${type}\` already exists`);
        }
        // set action handler on state class
        stateClass.prototype[fn] = ({ setState }) => {
            setState(meta.defaults);
        };
        // set meta data
        meta.actions[type] = [
            {
                fn,
                options: {},
                type,
            },
        ];
        // wrap original function to call dispatch after method has finished
        const original = descriptor.value;
        function dispatch() {
            InjectorAccessorService.getInjector()
                .get(Store)
                .dispatch({ type });
        }
        function wrapper(...args) {
            const result = original.apply(this, args);
            // handle observable
            if (result instanceof Observable) {
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

export { NgxsExtensionsDecoratorsModule, ResetStateToDefault };
//# sourceMappingURL=ngxs-extensions-decorators.js.map
