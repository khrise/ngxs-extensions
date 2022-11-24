import { ensureStoreMetadata, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { InjectorAccessorService } from '../internal/injector-accessor.service';
import { uniqueId } from '../internal/utils';
/**
 * Decorator to reset state to default on method call.
 *
 * @param stateClass state to get defaults from
 */
export function ResetStateToDefault(stateClass) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtc3RhdGUuZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb3JlL2RlY29yYXRvcnMvcmVzZXQtc3RhdGUuZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBZ0IsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTdDOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsVUFBZTtJQUNqRCxPQUFPLFVBQVMsTUFBVyxFQUFFLEdBQVcsRUFBRSxVQUF3QztRQUNoRixtQkFBbUI7UUFDbkIsTUFBTSxFQUFFLEdBQUcsUUFBUSxFQUFFLENBQUM7UUFDdEIsTUFBTSxFQUFFLEdBQUcsY0FBYyxFQUFFLEVBQUUsQ0FBQztRQUM5QixNQUFNLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLGlCQUFpQixFQUFFLEVBQUUsQ0FBQztRQUN0RCxNQUFNLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU3QyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JDLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLElBQUksbUJBQW1CLENBQUMsQ0FBQztTQUMvRTtRQUVELG9DQUFvQztRQUNwQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQXFCLEVBQUUsRUFBRTtZQUM3RCxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQztRQUVGLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ25CO2dCQUNFLEVBQUU7Z0JBQ0YsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsSUFBSTthQUNMO1NBQ0YsQ0FBQztRQUVGLG9FQUFvRTtRQUNwRSxNQUFNLFFBQVEsR0FBYSxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQzVDLFNBQVMsUUFBUTtZQUNmLHVCQUF1QixDQUFDLFdBQVcsRUFBRTtpQkFDbEMsR0FBRyxDQUFRLEtBQUssQ0FBQztpQkFDakIsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBQ0QsU0FBUyxPQUFPLENBQVksR0FBRyxJQUFXO1lBQ3hDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFDLG9CQUFvQjtZQUNwQixJQUFJLE1BQU0sWUFBWSxVQUFVLEVBQUU7Z0JBQ2hDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7WUFDRCxpQkFBaUI7WUFDakIsSUFBSSxNQUFNLFlBQVksT0FBTyxFQUFFO2dCQUM3QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUI7WUFDRCxtQkFBbUI7WUFDbkIsUUFBUSxFQUFFLENBQUM7WUFDWCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBQ0QsVUFBVSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFFM0Isb0JBQW9CO1FBQ3BCLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbnN1cmVTdG9yZU1ldGFkYXRhLCBTdGF0ZUNvbnRleHQsIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSW5qZWN0b3JBY2Nlc3NvclNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcm5hbC9pbmplY3Rvci1hY2Nlc3Nvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICcuLi9pbnRlcm5hbC91dGlscyc7XHJcblxyXG4vKipcclxuICogRGVjb3JhdG9yIHRvIHJlc2V0IHN0YXRlIHRvIGRlZmF1bHQgb24gbWV0aG9kIGNhbGwuXHJcbiAqXHJcbiAqIEBwYXJhbSBzdGF0ZUNsYXNzIHN0YXRlIHRvIGdldCBkZWZhdWx0cyBmcm9tXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUmVzZXRTdGF0ZVRvRGVmYXVsdChzdGF0ZUNsYXNzOiBhbnkpIHtcclxuICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0OiBhbnksIGtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxhbnk+KSB7XHJcbiAgICAvLyBjcmVhdGUgbWV0YSBkYXRhXHJcbiAgICBjb25zdCBpZCA9IHVuaXF1ZUlkKCk7XHJcbiAgICBjb25zdCBmbiA9IGByZXNldEFjdGlvbiR7aWR9YDtcclxuICAgIGNvbnN0IHR5cGUgPSBgWyR7c3RhdGVDbGFzcy5uYW1lfV0gUmVzZXRBY3Rpb24tJHtpZH1gO1xyXG4gICAgY29uc3QgbWV0YSA9IGVuc3VyZVN0b3JlTWV0YWRhdGEoc3RhdGVDbGFzcyk7XHJcblxyXG4gICAgaWYgKG1ldGEuYWN0aW9ucy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBkZWNvcmF0ZWQgd2l0aCBzdWNoIHR5cGUgXFxgJHt0eXBlfVxcYCBhbHJlYWR5IGV4aXN0c2ApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCBhY3Rpb24gaGFuZGxlciBvbiBzdGF0ZSBjbGFzc1xyXG4gICAgc3RhdGVDbGFzcy5wcm90b3R5cGVbZm5dID0gKHsgc2V0U3RhdGUgfTogU3RhdGVDb250ZXh0PGFueT4pID0+IHtcclxuICAgICAgc2V0U3RhdGUobWV0YS5kZWZhdWx0cyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHNldCBtZXRhIGRhdGFcclxuICAgIG1ldGEuYWN0aW9uc1t0eXBlXSA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGZuLFxyXG4gICAgICAgIG9wdGlvbnM6IHt9LFxyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIC8vIHdyYXAgb3JpZ2luYWwgZnVuY3Rpb24gdG8gY2FsbCBkaXNwYXRjaCBhZnRlciBtZXRob2QgaGFzIGZpbmlzaGVkXHJcbiAgICBjb25zdCBvcmlnaW5hbDogRnVuY3Rpb24gPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG4gICAgZnVuY3Rpb24gZGlzcGF0Y2goKSB7XHJcbiAgICAgIEluamVjdG9yQWNjZXNzb3JTZXJ2aWNlLmdldEluamVjdG9yKClcclxuICAgICAgICAuZ2V0PFN0b3JlPihTdG9yZSlcclxuICAgICAgICAuZGlzcGF0Y2goeyB0eXBlIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd3JhcHBlcih0aGlzOiBhbnksIC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAvLyBoYW5kbGUgb2JzZXJ2YWJsZVxyXG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xyXG4gICAgICAgIHJlc3VsdC50b1Byb21pc2UoKS50aGVuKGRpc3BhdGNoKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGhhbmRsZSBwcm9taXNlXHJcbiAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50aGVuKGRpc3BhdGNoKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBoYW5kbGUgc3luYyBjYWxsXHJcbiAgICAgIGRpc3BhdGNoKCk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gd3JhcHBlcjtcclxuXHJcbiAgICAvLyByZXR1cm4gZGVzY3JpcHRvclxyXG4gICAgcmV0dXJuIGRlc2NyaXB0b3I7XHJcbiAgfTtcclxufVxyXG4iXX0=