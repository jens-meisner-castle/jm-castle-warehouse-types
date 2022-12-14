export const ErrorCodes = {
  "-1": {
    name: "UnknownError",
    description: "Used, if a new or unknwon error name was used.",
  },
  "40101": {
    name: "TokenUndefinedError",
    description: "Token not specified in request.",
  },
  "40102": { name: "TokenExpiredError", description: "Token is too old." },
  "66601": {
    name: "CastleConfigError",
    description: "Bad configuration of the castle system.",
  },
  "77701": {
    name: "DevError",
    description: "This should not happen. Needs a software update.",
  },
};

/**
 * Explizit referenzierte Fehler
 */
export const DevErrorCode = "77701";
export const TokenUndefinedErrorCode = "40101";
export const UnknownErrorCode = "-1";
export const CastleConfigErrorCode = "66601";

export type ErrorCode = keyof typeof ErrorCodes;

const newNameToCodeMap: Record<string, ErrorCode> = {};

Object.keys(ErrorCodes).forEach((code: ErrorCode) => {
  const { name } = ErrorCodes[code];
  newNameToCodeMap[name] = code;
});

export const NameToCodeMap = newNameToCodeMap;

export const getErrorCode = (name: string) => NameToCodeMap[name] || "-1";
