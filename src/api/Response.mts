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
      errorCode?: string;
      errorDetails?: Record<string, unknown>;
    };
