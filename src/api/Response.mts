export type ApiServiceResponse<T> =
  | {
      response: T;
      error?: never;
      errorCode?: never;
    }
  | { response: never; error: string; errorCode?: string };
