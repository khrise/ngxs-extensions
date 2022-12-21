import { ModuleWithProviders } from '@angular/core';
import { InjectorAccessorService } from './core/internal/injector-accessor.service';
import * as i0 from "@angular/core";
export declare class NgxsExtensionsDecoratorsModule {
    private injectorAccessorService;
    constructor(injectorAccessorService: InjectorAccessorService);
    static forRoot(): ModuleWithProviders<NgxsExtensionsDecoratorsModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxsExtensionsDecoratorsModule, [{ self: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgxsExtensionsDecoratorsModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgxsExtensionsDecoratorsModule>;
}
