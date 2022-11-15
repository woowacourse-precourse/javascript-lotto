const ERROR_CODE = Object.freeze({
  NOT_NUMBER: "NOT_NUMBER",
  WRONG_AMOUNT: "WRONG_AMOUNT",
  WRONG_COUNT: "WRONG_COUNT",
  WRONG_FORMAT: "WRONG_FORMAT",
  OUT_OF_RANGE: "OUT_OF_RANGE",
  DUPLICATED: "DUPLICATED",
});

const ERROR_MESSAGE = Object.freeze({
  NOT_NUMBER: "[ERROR] 숫자만 입력해 주세요.",
  WRONG_AMOUNT: "[ERROR] 천원 단위로 입력해 주세요.",
  WRONG_COUNT: "[ERROR] 로또 번호는 6개의 숫자여야 합니다.",
  WRONG_FORMAT: "[ERROR] 잘못된 입력 형식입니다.",
  OUT_OF_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  DUPLICATED: "[ERROR] 로또 번호가 중복되었습니다.",
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
