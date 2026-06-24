import * as i0 from '@angular/core';
import { Injector, ModuleWithProviders } from '@angular/core';

declare class InjectorAccessorService {
    private static injector;
    constructor(injector: Injector);
    static getInjector(): never | Injector;
    static ɵfac: i0.ɵɵFactoryDeclaration<InjectorAccessorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InjectorAccessorService>;
}

declare class NgxsExtensionsDecoratorsModule {
    private injectorAccessorService;
    constructor(injectorAccessorService: InjectorAccessorService);
    static forRoot(): ModuleWithProviders<NgxsExtensionsDecoratorsModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxsExtensionsDecoratorsModule, [{ self: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgxsExtensionsDecoratorsModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgxsExtensionsDecoratorsModule>;
}

/**
 * Decorator to reset state to default on method call.
 *
 * @param stateClass state to get defaults from
 */
declare function ResetStateToDefault(stateClass: any): (target: any, key: string, descriptor: TypedPropertyDescriptor<any>) => TypedPropertyDescriptor<any>;

export { NgxsExtensionsDecoratorsModule, ResetStateToDefault };
