export declare type JitterType = "none" | "full";
export interface IBackOffOptions {
    delayFirstAttempt: boolean;
    jitter: JitterType;
    maxDelay: number;
    numOfAttempts: number;
    retry: (e: any, attemptNumber: number) => boolean | Promise<boolean>;
    startingDelay: number;
    timeMultiple: number;
}
export declare function getSanitizedOptions(options: Partial<IBackOffOptions>): IBackOffOptions;
