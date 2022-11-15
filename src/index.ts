import { Table, TableStatus } from "./database/index.js";
import { SystemSetupStatus } from "./system/index.js";

export { Table, TableStatus, SystemSetupStatus };

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

export interface ExecuteSetupResponse {
  setup: { createDb: CreateDbResponse; createTables: CreateTablesResponse };
}

export const ValueTypes = {
  number: { id: "number", name: "Eine Zahl" },
  string: { id: "string", name: "Eine Zeichenfolge" },
  boolean: {
    id: "boolean",
    name: "Wahrheitswert (true oder false bzw. 1 oder 0)",
  },
  date: {
    id: "date",
    name: "Datum (formatiert als <yyyy-MM-dd HH:mm:ss> oder numerisch als Millisekundenwert)",
  },
};

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

export const DurationUnits = {
  ms: {
    id: "ms",
    name: "Millisekunde",
    cat: "duration",
    luxonKey: "millisecond" as LuxonKey,
  },
  s: {
    id: "s",
    name: "Sekunde",
    cat: "duration",
    luxonKey: "second" as LuxonKey,
  },
  min: {
    id: "min",
    name: "Minute",
    cat: "duration",
    luxonKey: "minute" as LuxonKey,
  },
  h: {
    id: "h",
    name: "Stunde",
    cat: "duration",
    luxonKey: "hour" as LuxonKey,
  },
  d: {
    id: "d",
    name: "Tag",
    cat: "duration",
    luxonKey: "day" as LuxonKey,
  },
};

export type DurationUnit = keyof typeof DurationUnits;

export const ValueUnits = Object.assign({}, DurationUnits, {
  "°C": { id: "°C", name: "Grad Celsius", cat: "temperature" },
  W: { id: "W", name: "Watt", cat: "power" },
  Wmin: { id: "Wmin", name: "Wattminute", cat: "energy" },
  Wh: { id: "Wh", name: "Wattstunde", cat: "energy" },
  kWh: { id: "kWh", name: "Kilowattstunde", cat: "energy" },
  V: { id: "V", name: "Volt", cat: "voltage" },
});

export const isDurationUnit = (s: string): s is DurationUnit =>
  !!DurationUnits[s as DurationUnit];

export const getCategoryOfUnit = (id: keyof typeof ValueUnits) =>
  ValueUnits[id]?.cat;

export type SystemControlResponse =
  | { success: true; error?: never }
  | { success: false; error: string };

export type InsertResponse =
  | {
      result: { cmd: string; affectedRows: number };
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

export type PersistentRow = Record<string, unknown>;

export interface Row_Store extends PersistentRow {
  store_id: string;
  name: string;
}

export interface Row_StoreSection extends PersistentRow {
  store_id: string;
  section_id: string;
  name: string;
}

export interface QueryParametersSchema {
  type: "object";
  properties: Record<string, unknown>;
  required?: string[];
}

export interface SerializableService {
  url: string;
  parameters?: QueryParametersSchema;
  method?: "GET";
  name: string;
  scope?: "public" | "private";
}

export const PersistenceAreas = {
  store: "Lager",
  "store-section": "Sektion / Abschnitt in einem Lager",
};

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
}

export interface Configuration {
  system?: SystemSpec;
  persistence: Record<string, PersistenceSpec>;
  mail: Record<string, MailingSpec>;
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
