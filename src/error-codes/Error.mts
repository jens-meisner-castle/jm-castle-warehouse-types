export const ErrorCodes = {
  "-1": { name: "Unknown error" },
  "40101": { name: "TokenUndefinedError" },
  "40102": { name: "TokenExpiredError" },
};

export type ErrorCode = keyof typeof ErrorCodes;

const newNameToCodeMap: Record<string, ErrorCode> = {};

Object.keys(ErrorCodes).forEach((code: ErrorCode) => {
  const { name } = ErrorCodes[code];
  newNameToCodeMap[name] = code;
});

export const NameToCodeMap = newNameToCodeMap;

export const getErrorCode = (name: string) => NameToCodeMap[name] || "-1";
