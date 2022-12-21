import { NgModule, Self } from '@angular/core';
import { InjectorAccessorService } from './core/internal/injector-accessor.service';
import * as i0 from "@angular/core";
import * as i1 from "./core/internal/injector-accessor.service";
export class NgxsExtensionsDecoratorsModule {
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
/** @nocollapse */ NgxsExtensionsDecoratorsModule.ɵfac = function NgxsExtensionsDecoratorsModule_Factory(t) { return new (t || NgxsExtensionsDecoratorsModule)(i0.ɵɵinject(i1.InjectorAccessorService, 2)); };
/** @nocollapse */ NgxsExtensionsDecoratorsModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: NgxsExtensionsDecoratorsModule });
/** @nocollapse */ NgxsExtensionsDecoratorsModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxsExtensionsDecoratorsModule, [{
        type: NgModule
    }], function () { return [{ type: i1.InjectorAccessorService, decorators: [{
                type: Self
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RlY29yYXRvcnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7O0FBR3BGLE1BQU0sT0FBTyw4QkFBOEI7SUFDekMsWUFBNEIsdUJBQWdEO1FBQWhELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFBRyxDQUFDO0lBRXpFLE1BQU0sQ0FBQyxPQUFPO1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUsOEJBQThCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7SUFDSixDQUFDOzsrSEFSVSw4QkFBOEI7K0dBQTlCLDhCQUE4Qjs7dUZBQTlCLDhCQUE4QjtjQUQxQyxRQUFROztzQkFFTSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0b3JBY2Nlc3NvclNlcnZpY2UgfSBmcm9tICcuL2NvcmUvaW50ZXJuYWwvaW5qZWN0b3ItYWNjZXNzb3Iuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoKVxyXG5leHBvcnQgY2xhc3MgTmd4c0V4dGVuc2lvbnNEZWNvcmF0b3JzTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcihAU2VsZigpIHByaXZhdGUgaW5qZWN0b3JBY2Nlc3NvclNlcnZpY2U6IEluamVjdG9yQWNjZXNzb3JTZXJ2aWNlKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3hzRXh0ZW5zaW9uc0RlY29yYXRvcnNNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBOZ3hzRXh0ZW5zaW9uc0RlY29yYXRvcnNNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0luamVjdG9yQWNjZXNzb3JTZXJ2aWNlXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==