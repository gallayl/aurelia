import { IContainer, Reporter as RuntimeReporter, Tracer as RuntimeTracer } from '@aurelia/kernel';
import { enableImprovedExpressionDebugging } from './binding/unparser';
import { Reporter, Tracer } from './reporter';

export const DebugConfiguration = {
  register(container: IContainer): void {
    Reporter.write(2);
    Object.assign(RuntimeReporter, Reporter);
    enableImprovedExpressionDebugging();
  }
};

export const TraceConfiguration = {
  register(container: IContainer): void {
    Object.assign(RuntimeTracer, Tracer);
  }
};
