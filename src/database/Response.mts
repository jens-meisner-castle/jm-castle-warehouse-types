import { ErrorCode } from "../error-codes";

export type InsertResponse<R> =
  | {
      result: { cmd: string; affectedRows: number; data: R };
      error?: never;
      errorCode?: never;
      errorDetails?: never;
    }
  | {
      result?: never;
      error: string;
      errorCode?: ErrorCode;
      errorDetails?: Record<string, unknown>;
    };

export type UpdateResponse<R> =
  | {
      result: { cmd: string; affectedRows: number; data: R };
      error?: never;
      errorCode?: never;
      errorDetails?: never;
    }
  | {
      result?: never;
      error: string;
      errorCode?: ErrorCode;
      errorDetails?: Record<string, unknown>;
    };

export type SelectResponse<R> =
  | {
      result: { cmd: string; rows: R[] };
      error?: never;
      errorCode?: never;
      errorDetails?: never;
    }
  | {
      result?: never;
      error: string;
      errorCode?: ErrorCode;
      errorDetails?: Record<string, unknown>;
    };

export type BatchResponse =
  | {
      result: { cmds: string[] };
      error?: never;
      errorCode?: never;
      errorDetails?: never;
    }
  | {
      result?: never;
      error: string;
      errorCode?: ErrorCode;
      errorDetails?: Record<string, unknown>;
    };
