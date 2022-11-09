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
/** @nocollapse */ InjectorAccessorService.ɵprov = i0.ɵɵdefineInjectable({ token: InjectorAccessorService, factory: InjectorAccessorService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InjectorAccessorService, [{
        type: Injectable
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0b3ItYWNjZXNzb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9EZXZlbG9wL2dpdGh1Yi9uZ3hzLWV4dGVuc2lvbnMvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaW50ZXJuYWwvaW5qZWN0b3ItYWNjZXNzb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHckQsTUFBTSxPQUFPLHVCQUF1QjtJQUdsQyxZQUFZLFFBQWtCO1FBQzVCLHVCQUF1QixDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDOUMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO1NBQ3RFO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7O0FBWmMsZ0NBQVEsR0FBb0IsSUFBSSxDQUFDO2lIQURyQyx1QkFBdUI7a0ZBQXZCLHVCQUF1QixXQUF2Qix1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQURuQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEluamVjdG9yQWNjZXNzb3JTZXJ2aWNlIHtcclxuICBwcml2YXRlIHN0YXRpYyBpbmplY3RvcjogSW5qZWN0b3IgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICBJbmplY3RvckFjY2Vzc29yU2VydmljZS5pbmplY3RvciA9IGluamVjdG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRJbmplY3RvcigpOiBuZXZlciB8IEluamVjdG9yIHtcclxuICAgIGlmICh0aGlzLmluamVjdG9yID09PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCJOZ3hzRXh0ZW5zaW9uc0RlY29yYXRvcnNNb2R1bGVcIiBpcyBub3QgaW1wb3J0ZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3I7XHJcbiAgfVxyXG59XHJcbiJdfQ==