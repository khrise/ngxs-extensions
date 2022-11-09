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
/** @nocollapse */ NgxsExtensionsDecoratorsModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxsExtensionsDecoratorsModule });
/** @nocollapse */ NgxsExtensionsDecoratorsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxsExtensionsDecoratorsModule_Factory(t) { return new (t || NgxsExtensionsDecoratorsModule)(i0.ɵɵinject(i1.InjectorAccessorService, 2)); } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxsExtensionsDecoratorsModule, [{
        type: NgModule
    }], function () { return [{ type: i1.InjectorAccessorService, decorators: [{
                type: Self
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiQzovRGV2ZWxvcC9naXRodWIvbmd4cy1leHRlbnNpb25zL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9kZWNvcmF0b3JzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7OztBQUdwRixNQUFNLE9BQU8sOEJBQThCO0lBQ3pDLFlBQTRCLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQUcsQ0FBQztJQUV6RSxNQUFNLENBQUMsT0FBTztRQUNuQixPQUFPO1lBQ0wsUUFBUSxFQUFFLDhCQUE4QjtZQUN4QyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO0lBQ0osQ0FBQzs7cUZBUlUsOEJBQThCOzhKQUE5Qiw4QkFBOEI7a0RBQTlCLDhCQUE4QjtjQUQxQyxRQUFROztzQkFFTSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0b3JBY2Nlc3NvclNlcnZpY2UgfSBmcm9tICcuL2NvcmUvaW50ZXJuYWwvaW5qZWN0b3ItYWNjZXNzb3Iuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoKVxyXG5leHBvcnQgY2xhc3MgTmd4c0V4dGVuc2lvbnNEZWNvcmF0b3JzTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcihAU2VsZigpIHByaXZhdGUgaW5qZWN0b3JBY2Nlc3NvclNlcnZpY2U6IEluamVjdG9yQWNjZXNzb3JTZXJ2aWNlKSB7fVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3hzRXh0ZW5zaW9uc0RlY29yYXRvcnNNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBOZ3hzRXh0ZW5zaW9uc0RlY29yYXRvcnNNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0luamVjdG9yQWNjZXNzb3JTZXJ2aWNlXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==