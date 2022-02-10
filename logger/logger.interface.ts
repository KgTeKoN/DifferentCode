import { Logger } from "tslog";

export interface ILoger {
    logger: unknown;
    log: (...args: unknown[]) => void;
    error: (...args: unknown[]) => void;
    warn: (...args: unknown[]) => void;
}