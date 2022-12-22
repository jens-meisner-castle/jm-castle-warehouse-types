export const ErrorCodes = {
  "-1": {
    name: "UnknownError",
    description: "Used, if a new or unknwon error name was used.",
    apiStatus: 500,
  },
  "40001": {
    name: "BadRequestMissingParameter",
    description: "One or more needed parameters are undefined.",
    apiStatus: 400,
  },
  "40101": {
    name: "TokenUndefinedError",
    description: "Token not specified in request.",
    apiStatus: 401,
  },
  "40102": {
    name: "TokenExpiredError",
    description: "Token is too old.",
    apiStatus: 401,
  },
  "40103": {
    name: "JsonWebTokenError",
    description: "Token could not be verified.",
    apiStatus: 401,
  },
  "66601": {
    name: "CastleConfigError",
    description: "Bad configuration of the castle system.",
    apiStatus: 500,
  },
  "77701": {
    name: "DevError",
    description: "This should not happen. Needs a software update.",
    apiStatus: 500,
  },
  "88801": {
    name: "SqlDataError",
    description:
      "Used for bad data. Original error comes from DB Server. Check error no in error message.",
    apiStatus: 500,
  },
};

/**
 * Explizit referenzierte Fehler
 */
export const UnknownErrorCode = "-1";
export const BadRequestMissingParameterCode = "40001";
export const TokenUndefinedErrorCode = "40101";
export const TokenExpiredErrorCode = "40102";
// name is scoming from jsonwebtoken library
export const JsonWebTokenError = "40103";
export const CastleConfigErrorCode = "66601";
export const DevErrorCode = "77701";
export const SqlDataErrorCode = "88801";

export type ErrorCode = keyof typeof ErrorCodes;

const newNameToCodeMap: Record<string, ErrorCode> = {};

Object.keys(ErrorCodes).forEach((code: ErrorCode) => {
  const { name } = ErrorCodes[code];
  newNameToCodeMap[name] = code;
});

export const NameToCodeMap = newNameToCodeMap;

export const getErrorCode = (name: string): ErrorCode =>
  NameToCodeMap[name] || "-1";

export const getApiStatus = (code: ErrorCode) => ErrorCodes[code].apiStatus;

export const getSqlErrorCode = (errno: number) => `sql-${errno}`;
