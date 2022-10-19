import { IBackOffOptions } from "./options";
export { IBackOffOptions };
export declare function backOff<T>(request: () => Promise<T>, options?: Partial<IBackOffOptions>): Promise<T>;
