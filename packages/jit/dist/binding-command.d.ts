import { IRegistry } from '@aurelia/kernel';
import { IExpressionParser, IResourceKind, IResourceType, TargetedInstruction } from '@aurelia/runtime';
import { IAttributeSymbol } from './semantic-model';
export interface IBindingCommandSource {
    name: string;
}
export interface IBindingCommand {
    compile($symbol: IAttributeSymbol): TargetedInstruction;
    handles($symbol: IAttributeSymbol): boolean;
}
export declare type IBindingCommandType = IResourceType<IBindingCommandSource, IBindingCommand>;
export declare function bindingCommand(nameOrSource: string | IBindingCommandSource): any;
export declare const BindingCommandResource: IResourceKind<IBindingCommandSource, IBindingCommandType>;
export interface OneTimeBindingCommand extends IBindingCommand {
}
export declare class OneTimeBindingCommand implements IBindingCommand {
    static inject: Function[];
    static register: IRegistry['register'];
    private parser;
    constructor(parser: IExpressionParser);
    compile($symbol: IAttributeSymbol): TargetedInstruction;
}
export interface ToViewBindingCommand extends IBindingCommand {
}
export declare class ToViewBindingCommand implements IBindingCommand {
    static inject: Function[];
    static register: IRegistry['register'];
    private parser;
    constructor(parser: IExpressionParser);
    compile($symbol: IAttributeSymbol): TargetedInstruction;
}
export interface FromViewBindingCommand extends IBindingCommand {
}
export declare class FromViewBindingCommand implements IBindingCommand {
    static inject: Function[];
    static register: IRegistry['register'];
    private parser;
    constructor(parser: IExpressionParser);
    compile($symbol: IAttributeSymbol): TargetedInstruction;
}
export interface TwoWayBindingCommand extends IBindingCommand {
}
export declare class TwoWayBindingCommand implements IBindingCommand {
    static inject: Function[];
    static register: IRegistry['register'];
    private parser;
    constructor(parser: IExpressionParser);
    compile($symbol: IAttributeSymbol): TargetedInstruction;
}
export interface DefaultBindingCommand extends IBindingCommand {
}
export declare class DefaultBindingCommand implements IBindingCommand {
    static inject: Function[];
    static register: IRegistry['register'];
    $1: typeof OneTimeBindingCommand.prototype.compile;
    $2: typeof ToViewBindingCommand.prototype.compile;
    $4: typeof FromViewBindingCommand.prototype.compile;
    $6: typeof TwoWayBindingCommand.prototype.compile;
    private parser;
    constructor(parser: IExpressionParser);
    compile($symbol: IAttributeSymbol): TargetedInstruction;
}
export interface TriggerBindingCommand extends IBindingCommand {
}
export declare class TriggerBindingCommand implements IBindingCommand {
    static inject: Function[];
    static register: IRegistry['register'];
    private parser;
    constructor(parser: IExpressionParser);
    compile($symbol: IAttributeSymbol): TargetedInstruction;
}
export interface DelegateBindingCommand extends IBindingCommand {
}
export declare class DelegateBindingCommand implements IBindingCommand {
    static inject: Function[];
    static register: IRegistry['register'];
    private parser;
    constructor(parser: IExpressionParser);
    compile($symbol: IAttributeSymbol): TargetedInstruction;
}
export interface CaptureBindingCommand extends IBindingCommand {
}
export declare class CaptureBindingCommand implements IBindingCommand {
    static inject: Function[];
    static register: IRegistry['register'];
    private parser;
    constructor(parser: IExpressionParser);
    compile($symbol: IAttributeSymbol): TargetedInstruction;
}
export interface CallBindingCommand extends IBindingCommand {
}
export declare class CallBindingCommand implements IBindingCommand {
    static inject: Function[];
    static register: IRegistry['register'];
    private parser;
    constructor(parser: IExpressionParser);
    compile($symbol: IAttributeSymbol): TargetedInstruction;
}
export declare class ForBindingCommand implements IBindingCommand {
    static inject: Function[];
    static register: IRegistry['register'];
    private parser;
    constructor(parser: IExpressionParser);
    compile($symbol: IAttributeSymbol): TargetedInstruction;
    handles($symbol: IAttributeSymbol): boolean;
}
//# sourceMappingURL=binding-command.d.ts.map