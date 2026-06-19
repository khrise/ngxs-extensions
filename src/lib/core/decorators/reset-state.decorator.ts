import { Action, StateContext, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { InjectorAccessorService } from '../internal/injector-accessor.service';
import { uniqueId } from '../internal/utils';

const RESET_DEFAULTS_KEY = '__ngxsExtensionsResetDefaults__';
const RESET_CAPTURE_HOOK_KEY = '__ngxsExtensionsResetCaptureHook__';

function cloneDeep<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map(item => cloneDeep(item)) as unknown as T;
  }

  if (value && typeof value === 'object') {
    return Object.keys(value as unknown as object).reduce((acc, key) => {
      (acc as any)[key] = cloneDeep((value as any)[key]);
      return acc;
    }, {} as any) as T;
  }

  return value;
}

function ensureDefaultsCaptureHook(stateClass: any): void {
  if (stateClass[RESET_CAPTURE_HOOK_KEY]) {
    return;
  }

  const originalNgxsOnInit = stateClass.prototype.ngxsOnInit;
  stateClass.prototype.ngxsOnInit = function (ctx: StateContext<any>) {
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
export function ResetStateToDefault(stateClass: any) {
  return function (target: any, key: string, descriptor: TypedPropertyDescriptor<any>) {
    ensureDefaultsCaptureHook(stateClass);

    // Build a unique action type for this decorator instance.
    const id = uniqueId();
    const fn = `resetAction${id}`;
    const type = `[${stateClass.name}] ResetAction-${id}`;

    class ResetAction {
      static readonly type = type;
    }

    // Register a reset action handler via the public Action decorator.
    stateClass.prototype[fn] = ({ setState }: StateContext<any>) => {
      const defaults = stateClass[RESET_DEFAULTS_KEY];
      if (defaults !== undefined) {
        setState(cloneDeep(defaults));
      }
    };
    Action(ResetAction)(stateClass.prototype, fn, Object.getOwnPropertyDescriptor(stateClass.prototype, fn)!);

    // wrap original function to call dispatch after method has finished
    const original: Function = descriptor.value;
    function dispatch() {
      InjectorAccessorService.getInjector().get<Store>(Store).dispatch(new ResetAction());
    }
    function wrapper(this: any, ...args: any[]) {
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
