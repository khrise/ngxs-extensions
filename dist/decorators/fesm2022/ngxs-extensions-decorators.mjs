import * as i0 from '@angular/core';
import { Injectable, Self, NgModule } from '@angular/core';
import { Action, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

class InjectorAccessorService {
    static injector = null;
    constructor(injector) {
        InjectorAccessorService.injector = injector;
    }
    static getInjector() {
        if (this.injector === null) {
            throw new Error('"NgxsExtensionsDecoratorsModule" is not imported.');
        }
        return this.injector;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: InjectorAccessorService, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: InjectorAccessorService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: InjectorAccessorService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i0.Injector }] });

class NgxsExtensionsDecoratorsModule {
    injectorAccessorService;
    constructor(injectorAccessorService) {
        this.injectorAccessorService = injectorAccessorService;
    }
    static forRoot() {
        return {
            ngModule: NgxsExtensionsDecoratorsModule,
            providers: [InjectorAccessorService],
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: NgxsExtensionsDecoratorsModule, deps: [{ token: InjectorAccessorService, self: true }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.25", ngImport: i0, type: NgxsExtensionsDecoratorsModule });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: NgxsExtensionsDecoratorsModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: NgxsExtensionsDecoratorsModule, decorators: [{
            type: NgModule
        }], ctorParameters: () => [{ type: InjectorAccessorService, decorators: [{
                    type: Self
                }] }] });

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

const RESET_DEFAULTS_KEY = '__ngxsExtensionsResetDefaults__';
const RESET_CAPTURE_HOOK_KEY = '__ngxsExtensionsResetCaptureHook__';
function cloneDeep(value) {
    if (Array.isArray(value)) {
        return value.map(item => cloneDeep(item));
    }
    if (value && typeof value === 'object') {
        return Object.keys(value).reduce((acc, key) => {
            acc[key] = cloneDeep(value[key]);
            return acc;
        }, {});
    }
    return value;
}
function ensureDefaultsCaptureHook(stateClass) {
    if (stateClass[RESET_CAPTURE_HOOK_KEY]) {
        return;
    }
    const originalNgxsOnInit = stateClass.prototype.ngxsOnInit;
    stateClass.prototype.ngxsOnInit = function (ctx) {
        if (stateClass[RESET_DEFAULTS_KEY] === undefined) {
            stateClass[RESET_DEFAULTS_KEY] = cloneDeep(ctx.getState());
        }
        if (typeof originalNgxsOnInit === 'function') {
            return originalNgxsOnInit.call(this, ctx);
        }
    };
    stateClass[RESET_CAPTURE_HOOK_KEY] = true;
}
/**
 * Decorator to reset state to default on method call.
 *
 * @param stateClass state to get defaults from
 */
function ResetStateToDefault(stateClass) {
    return function (target, key, descriptor) {
        ensureDefaultsCaptureHook(stateClass);
        // Build a unique action type for this decorator instance.
        const id = uniqueId();
        const fn = `resetAction${id}`;
        const type = `[${stateClass.name}] ResetAction-${id}`;
        class ResetAction {
            static type = type;
        }
        // Register a reset action handler via the public Action decorator.
        stateClass.prototype[fn] = ({ setState }) => {
            const defaults = stateClass[RESET_DEFAULTS_KEY];
            if (defaults !== undefined) {
                setState(cloneDeep(defaults));
            }
        };
        Action(ResetAction)(stateClass.prototype, fn, Object.getOwnPropertyDescriptor(stateClass.prototype, fn));
        // wrap original function to call dispatch after method has finished
        const original = descriptor.value;
        function dispatch() {
            InjectorAccessorService.getInjector().get(Store).dispatch(new ResetAction());
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
//# sourceMappingURL=ngxs-extensions-decorators.mjs.map
