import { Injectable, Injector } from '@angular/core';
import * as i0 from "@angular/core";
export class InjectorAccessorService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0b3ItYWNjZXNzb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29yZS9pbnRlcm5hbC9pbmplY3Rvci1hY2Nlc3Nvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUdyRCxNQUFNLE9BQU8sdUJBQXVCO0lBR2xDLFlBQVksUUFBa0I7UUFDNUIsdUJBQXVCLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM5QyxDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVc7UUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7U0FDdEU7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7QUFaYyxnQ0FBUSxHQUFvQixJQUFJLENBQUM7aUhBRHJDLHVCQUF1Qjs0R0FBdkIsdUJBQXVCLFdBQXZCLHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBRG5DLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW5qZWN0b3JBY2Nlc3NvclNlcnZpY2Uge1xyXG4gIHByaXZhdGUgc3RhdGljIGluamVjdG9yOiBJbmplY3RvciB8IG51bGwgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIEluamVjdG9yQWNjZXNzb3JTZXJ2aWNlLmluamVjdG9yID0gaW5qZWN0b3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldEluamVjdG9yKCk6IG5ldmVyIHwgSW5qZWN0b3Ige1xyXG4gICAgaWYgKHRoaXMuaW5qZWN0b3IgPT09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIk5neHNFeHRlbnNpb25zRGVjb3JhdG9yc01vZHVsZVwiIGlzIG5vdCBpbXBvcnRlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5pbmplY3RvcjtcclxuICB9XHJcbn1cclxuIl19