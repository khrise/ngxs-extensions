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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtc3RhdGUuZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6IkM6L0RldmVsb3AvZ2l0aHViL25neHMtZXh0ZW5zaW9ucy9zcmMvIiwic291cmNlcyI6WyJsaWIvY29yZS9kZWNvcmF0b3JzL3Jlc2V0LXN0YXRlLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQWdCLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU3Qzs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLG1CQUFtQixDQUFDLFVBQWU7SUFDakQsT0FBTyxVQUFTLE1BQVcsRUFBRSxHQUFXLEVBQUUsVUFBd0M7UUFDaEYsbUJBQW1CO1FBQ25CLE1BQU0sRUFBRSxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBQ3RCLE1BQU0sRUFBRSxHQUFHLGNBQWMsRUFBRSxFQUFFLENBQUM7UUFDOUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxFQUFFLENBQUM7UUFDdEQsTUFBTSxJQUFJLEdBQUcsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFN0MsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyQyxNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFxQyxJQUFJLG1CQUFtQixDQUFDLENBQUM7U0FDL0U7UUFFRCxvQ0FBb0M7UUFDcEMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFxQixFQUFFLEVBQUU7WUFDN0QsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUM7UUFFRixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRztZQUNuQjtnQkFDRSxFQUFFO2dCQUNGLE9BQU8sRUFBRSxFQUFFO2dCQUNYLElBQUk7YUFDTDtTQUNGLENBQUM7UUFFRixvRUFBb0U7UUFDcEUsTUFBTSxRQUFRLEdBQWEsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUM1QyxTQUFTLFFBQVE7WUFDZix1QkFBdUIsQ0FBQyxXQUFXLEVBQUU7aUJBQ2xDLEdBQUcsQ0FBUSxLQUFLLENBQUM7aUJBQ2pCLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUNELFNBQVMsT0FBTyxDQUFZLEdBQUcsSUFBVztZQUN4QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxQyxvQkFBb0I7WUFDcEIsSUFBSSxNQUFNLFlBQVksVUFBVSxFQUFFO2dCQUNoQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNsQyxPQUFPLE1BQU0sQ0FBQzthQUNmO1lBQ0QsaUJBQWlCO1lBQ2pCLElBQUksTUFBTSxZQUFZLE9BQU8sRUFBRTtnQkFDN0IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCO1lBQ0QsbUJBQW1CO1lBQ25CLFFBQVEsRUFBRSxDQUFDO1lBQ1gsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztRQUNELFVBQVUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBRTNCLG9CQUFvQjtRQUNwQixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW5zdXJlU3RvcmVNZXRhZGF0YSwgU3RhdGVDb250ZXh0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEluamVjdG9yQWNjZXNzb3JTZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW5qZWN0b3ItYWNjZXNzb3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSAnLi4vaW50ZXJuYWwvdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIERlY29yYXRvciB0byByZXNldCBzdGF0ZSB0byBkZWZhdWx0IG9uIG1ldGhvZCBjYWxsLlxyXG4gKlxyXG4gKiBAcGFyYW0gc3RhdGVDbGFzcyBzdGF0ZSB0byBnZXQgZGVmYXVsdHMgZnJvbVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFJlc2V0U3RhdGVUb0RlZmF1bHQoc3RhdGVDbGFzczogYW55KSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8YW55Pikge1xyXG4gICAgLy8gY3JlYXRlIG1ldGEgZGF0YVxyXG4gICAgY29uc3QgaWQgPSB1bmlxdWVJZCgpO1xyXG4gICAgY29uc3QgZm4gPSBgcmVzZXRBY3Rpb24ke2lkfWA7XHJcbiAgICBjb25zdCB0eXBlID0gYFske3N0YXRlQ2xhc3MubmFtZX1dIFJlc2V0QWN0aW9uLSR7aWR9YDtcclxuICAgIGNvbnN0IG1ldGEgPSBlbnN1cmVTdG9yZU1ldGFkYXRhKHN0YXRlQ2xhc3MpO1xyXG5cclxuICAgIGlmIChtZXRhLmFjdGlvbnMuaGFzT3duUHJvcGVydHkodHlwZSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgZGVjb3JhdGVkIHdpdGggc3VjaCB0eXBlIFxcYCR7dHlwZX1cXGAgYWxyZWFkeSBleGlzdHNgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgYWN0aW9uIGhhbmRsZXIgb24gc3RhdGUgY2xhc3NcclxuICAgIHN0YXRlQ2xhc3MucHJvdG90eXBlW2ZuXSA9ICh7IHNldFN0YXRlIH06IFN0YXRlQ29udGV4dDxhbnk+KSA9PiB7XHJcbiAgICAgIHNldFN0YXRlKG1ldGEuZGVmYXVsdHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBzZXQgbWV0YSBkYXRhXHJcbiAgICBtZXRhLmFjdGlvbnNbdHlwZV0gPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBmbixcclxuICAgICAgICBvcHRpb25zOiB7fSxcclxuICAgICAgICB0eXBlLFxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICAvLyB3cmFwIG9yaWdpbmFsIGZ1bmN0aW9uIHRvIGNhbGwgZGlzcGF0Y2ggYWZ0ZXIgbWV0aG9kIGhhcyBmaW5pc2hlZFxyXG4gICAgY29uc3Qgb3JpZ2luYWw6IEZ1bmN0aW9uID0gZGVzY3JpcHRvci52YWx1ZTtcclxuICAgIGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xyXG4gICAgICBJbmplY3RvckFjY2Vzc29yU2VydmljZS5nZXRJbmplY3RvcigpXHJcbiAgICAgICAgLmdldDxTdG9yZT4oU3RvcmUpXHJcbiAgICAgICAgLmRpc3BhdGNoKHsgdHlwZSB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdyYXBwZXIodGhpczogYW55LCAuLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgLy8gaGFuZGxlIG9ic2VydmFibGVcclxuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcclxuICAgICAgICByZXN1bHQudG9Qcm9taXNlKCkudGhlbihkaXNwYXRjaCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgICAvLyBoYW5kbGUgcHJvbWlzZVxyXG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQudGhlbihkaXNwYXRjaCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gaGFuZGxlIHN5bmMgY2FsbFxyXG4gICAgICBkaXNwYXRjaCgpO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IHdyYXBwZXI7XHJcblxyXG4gICAgLy8gcmV0dXJuIGRlc2NyaXB0b3JcclxuICAgIHJldHVybiBkZXNjcmlwdG9yO1xyXG4gIH07XHJcbn1cclxuIl19