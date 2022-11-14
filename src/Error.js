const ERROR_CODE = Object.freeze({
  NOT_NUMBER: "NOT_NUMBER",
  WRONG_AMOUNT: "WRONG_AMOUNT",
});

const ERROR_MESSAGE = Object.freeze({
  NOT_NUMBER: "[ERROR] 숫자만 입력해 주세요.",
  WRONG_AMOUNT: "[ERROR] 천원 단위로 입력해 주세요.",
});

const createParams = (code, value) =>
  // eslint-disable
  [ERROR_MESSAGE[code], { cause: { code, value } }];

class CustomError extends Error {
  constructor(code, value = null) {
    super(...createParams(code, value));
  }
}

module.exports = { CustomError, ERROR_CODE };
