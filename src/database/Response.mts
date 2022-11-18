export type InsertResponse<R> =
  | {
      result: { cmd: string; affectedRows: number; data: R };
      error?: never;
      errorDetails?: never;
    }
  | {
      result?: never;
      error: string;
      errorDetails?: Record<string, unknown>;
    };

export type UpdateResponse<R> =
  | {
      result: { cmd: string; affectedRows: number; data: R };
      error?: never;
      errorDetails?: never;
    }
  | {
      result?: never;
      error: string;
      errorDetails?: Record<string, unknown>;
    };

export type SelectResponse<R> =
  | {
      result: { cmd: string; rows: R[] };
      error?: never;
      errorDetails?: never;
    }
  | {
      result?: never;
      error: string;
      errorDetails?: Record<string, unknown>;
    };
