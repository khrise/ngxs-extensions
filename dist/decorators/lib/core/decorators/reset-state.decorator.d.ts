/**
 * Decorator to reset state to default on method call.
 *
 * @param stateClass state to get defaults from
 */
export declare function ResetStateToDefault(stateClass: any): (target: any, key: string, descriptor: TypedPropertyDescriptor<any>) => TypedPropertyDescriptor<any>;
