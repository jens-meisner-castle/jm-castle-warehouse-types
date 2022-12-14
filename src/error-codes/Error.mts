export const ErrorCodes = {
  "40101": { name: "TokenExpiredError" },
};

export type ErrorCode = keyof typeof ErrorCodes;

const newNameToCodeMap: Record<string, ErrorCode> = {};

Object.keys(ErrorCodes).forEach((code: ErrorCode) => {
  const { name } = ErrorCodes[code];
  newNameToCodeMap[name] = code;
});

export const NameToCodeMap = newNameToCodeMap;
