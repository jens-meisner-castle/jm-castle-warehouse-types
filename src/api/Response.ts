import { ErrorCode } from "../error-codes/index.js";

export type ApiServiceResponse<T> =
  | {
      response: T;
      error?: never;
      errorCode?: never;
      errorDetails?: never;
    }
  | {
      response?: never;
      error: string;
      errorCode?: ErrorCode;
      errorDetails?: Record<string, unknown>;
    };
