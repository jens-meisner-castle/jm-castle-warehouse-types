import {
  BadRequestBadParameterCode,
  BadRequestMissingParameterCode,
  CastleConfigErrorCode,
  DevErrorCode,
  ErrorCode,
  ErrorCodes,
  getApiStatus,
  getErrorCode,
  JsonWebTokenError,
  NameToCodeMap,
  SqlDataErrorCode,
  TokenExpiredErrorCode,
  TokenUndefinedErrorCode,
  UnknownClientOrBadIpCode,
  UnknownErrorCode,
} from "jm-castle-types";
import { ApiServiceResponse } from "./api/index.js";
import {
  AllTableNames,
  BatchResponse,
  ColumnStatus,
  DeleteResponse,
  FindResponse,
  InsertResponse,
  SelectResponse,
  Table,
  TableName,
  TableStatus,
  UpdateResponse,
} from "./database/index.js";
import {
  AttributeValue,
  EmissionReason,
  EmissionReasons,
  EmissionRequestReason,
  EmissionRequestReasons,
  PersistentRow,
  ReceiptReason,
  ReceiptReasons,
  ReceiptRequestReason,
  ReceiptRequestReasons,
  Row_Article,
  Row_Attribute,
  Row_Costunit,
  Row_Emission,
  Row_EmissionRequest,
  Row_Hashtag,
  Row_ImageContent,
  Row_ImageReference,
  Row_Manufacturer,
  Row_Masterdata,
  Row_Receipt,
  Row_ReceiptRequest,
  Row_Receiver,
  Row_Store,
  Row_StoreSection,
} from "./row/index.js";
import {
  ArticleStockState,
  SectionStockState,
  StockStateCounts,
  SystemSetupStatus,
} from "./system/index.js";

export {
  BadRequestMissingParameterCode,
  BadRequestBadParameterCode,
  ErrorCode,
  ErrorCodes,
  NameToCodeMap,
  getErrorCode,
  getApiStatus,
  DevErrorCode,
  UnknownErrorCode,
  UnknownClientOrBadIpCode,
  TokenUndefinedErrorCode,
  TokenExpiredErrorCode,
  JsonWebTokenError,
  CastleConfigErrorCode,
  SqlDataErrorCode,
};
export {
  SystemSetupStatus,
  ArticleStockState,
  SectionStockState,
  StockStateCounts,
};
export {
  ColumnStatus,
  Table,
  TableStatus,
  InsertResponse,
  SelectResponse,
  UpdateResponse,
  BatchResponse,
  DeleteResponse,
  FindResponse,
  AllTableNames,
  TableName,
};
export { ApiServiceResponse };
export {
  AttributeValue,
  PersistentRow,
  Row_ImageReference,
  Row_ImageContent,
  Row_Store,
  Row_StoreSection,
  Row_Article,
  Row_Emission,
  Row_Receipt,
  Row_Receiver,
  Row_Masterdata,
  Row_Hashtag,
  Row_EmissionRequest,
  Row_ReceiptRequest,
  Row_Costunit,
  Row_Manufacturer,
  Row_Attribute,
  EmissionReasons,
  EmissionRequestReasons,
  EmissionReason,
  EmissionRequestReason,
  ReceiptReasons,
  ReceiptReason,
  ReceiptRequestReason,
  ReceiptRequestReasons,
};

export type AnyDate = Date;
export type AnyNumber = number;
export type AnyString = string;
export type AnyBoolean = boolean;
export type AnyDataValue =
  | AnyString
  | AnyDate
  | AnyNumber
  | AnyBoolean
  | null
  | undefined;

export interface CreateDbResponse {
  cmds: string[];
  result: Record<string, unknown>;
}

export interface CreateTablesResponse {
  cmds: string[];
  result: Record<string, unknown>;
}

export interface AlterTablesResponse {
  cmds: string[];
  result: Record<string, unknown>;
}

export interface ExecuteSetupResponse {
  setup: {
    createDb: CreateDbResponse;
    createTables: CreateTablesResponse;
    alterTables: AlterTablesResponse;
  };
}

export type LuxonKey = "millisecond" | "second" | "minute" | "hour" | "day";

export const CountUnits = {
  piece: { id: "piece", name: "Stück", cat: "count" },
  m: { id: "m", name: "Meter", cat: "distance" },
  kg: { id: "kg", name: "Kilogramm", cat: "weight" },
  l: { id: "l", name: "Liter", cat: "volume" },
};

export type CountUnit = keyof typeof CountUnits;

export const isCountUnit = (s: string): s is CountUnit =>
  !!CountUnits[s as CountUnit];

export type SystemControlResponse =
  | { success: true; error?: never }
  | { success: false; error: string };

export interface QueryParametersSchema {
  type: "object";
  properties: Record<string, unknown>;
  required?: string[];
}

export interface SerializableService {
  url: string;
  parameters?: QueryParametersSchema;
  method?: "GET" | "POST";
  name: string;
  scope?: "public" | "private";
  neededRole: string;
}

export interface MailingSMTPSpec {
  type: "smtp";
  host: string;
  port: number;
  user: string;
  password: string;
}

export interface MariaDatabaseSpec {
  type: "maria-db";
  database: string;
  host: string;
  port: number;
  user: string;
  password: string;
}

export type PersistenceSpec = { isDefault?: boolean } & MariaDatabaseSpec;

export type MailingSpec = {
  isDefault?: boolean;
  defaultReceivers?: string[];
} & MailingSMTPSpec;

export interface SystemSpec {
  name?: string;
  host: string;
  port: number;
  certs: {
    ca?: string;
    hostCert: string;
    hostKey: string;
  };
  client?: { path: string };
}

export interface ImageStoreSpec {
  maxWidth: number;
  maxHeight: number;
}
export interface FilesystemStoreSpec {
  type: "file-system";
  path: string;
}

export const UserRoles = {
  admin: { description: "Needed to do system setup." },
  internal: { description: "Needed to edit masterdata." },
  external: { description: "Basic or minimum role to get access." },
};

export type UserRole = keyof typeof UserRoles;

export const isUserRole = (s: string): s is UserRole => {
  switch (s) {
    case "admin":
    case "internal":
    case "external":
      return true;
    default:
      return false;
  }
};

export interface UserSettings {
  password: string;
  roles: UserRole[];
}

export interface ClientSettings {
  id: string;
  ip: string[];
  user: string;
}

export type DefaultUserSpec = Record<string, UserSettings>;

export type DefaultClientSpec = Record<string, ClientSettings>;

export interface Configuration {
  system: SystemSpec;
  user?: DefaultUserSpec;
  client?: DefaultClientSpec;
  persistence: Record<string, PersistenceSpec>;
  mail: Record<string, MailingSpec>;
  imageStore: FilesystemStoreSpec & ImageStoreSpec;
  systemBackupStore?: FilesystemStoreSpec;
  tempStore: FilesystemStoreSpec;
}

export interface CheckedConfiguration extends Configuration {
  isValid?: boolean;
}

export interface SystemStatus {
  startedAt: number;
  configuration: {
    content: CheckedConfiguration;
    errors: string[] | undefined;
    valid: CheckedConfiguration;
  };
}

export type LoginResult =
  | {
      token: string;
      expiresAtMs: number;
      expiresAtDisplay: string;
      roles: UserRole[];
      username: string;
      error?: never;
    }
  | {
      token?: never;
      expiresAtMs?: never;
      expiresAtDisplay?: never;
      roles?: never;
      username?: never;
      error: string;
    };

export type VerifyTokenResult =
  | {
      username: string;
      roles: UserRole[];
      expiresAtMs: number;
      expiresAtDisplay: string;
      error?: never;
      errorCode?: never;
    }
  | {
      username?: never;
      roles?: never;
      expiresAtMs?: never;
      expiresAtDisplay?: never;
      error: string;
      errorCode: ErrorCode;
    };

export interface DbExportData {
  version: { software: string; db: string };
  tables: {
    hashtag: { rows: Row_Hashtag[] };
    article: { rows: Row_Article[] };
    store: { rows: Row_Store[] };
    storeSection: { rows: Row_StoreSection[] };
    receipt: { rows: Row_Receipt[] };
    emission: { rows: Row_Emission[] };
    imageReference: { rows: Row_ImageReference[] };
    imageContent: { rows: Row_ImageContent[] };
  };
}

export interface SystemBackupResponse {
  version: { software: string; db: string };
  file: { path: string; sizeInBytes: number };
}
