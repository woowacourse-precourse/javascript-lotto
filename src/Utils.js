const CONSTANT = {
  LOTTO_LENGTH: 6,
  LOTTO_RANGE_START: 1,
  LOTTO_RANGE_END: 45,
  LOTTO_PRICE: 1000,
};

const WINMESSAGE = {
  FIFTH: "3개 일치",
  FOURTH: "4개 일치",
  THIRD: "5개 일치",
  SECOND: "5개 일치, 보너스 볼 일치",
  FIRST: "6개 일치",
};

const WINMONEY = {
  FIFTH: 5000,
  FOURTH: 50000,
  THIRD: 1500000,
  SECOND: 30000000,
  FIRST: 2000000000,
};

const ERROR_MESSAGE = {
  LOTTO: {
    INVALID_LENGTH:
      "[ERROR] 로또 번호는 6개를 쉼표(,)로 구분하여 정확하게 입력해 주세요.",
    NAN: "[ERROR] 숫자를 입력하세요.",
    DUPLICATE: "[ERROR] 중복되지 않는 숫자를 입력하세요.",
    OVER_RANGE: "[ERROR] 1부터 45까지 숫자 중 입력하세요.",
    NOT_INTEGER: "[ERROR] 정수를 입력하세요.",
  },

  LOTTO_BONUS: {
    NAN: "[ERROR] 1개의 숫자를 입력하세요.",
    DUPLICATE: "[ERROR] 당첨 번호와 중복되지 않는 숫자를 입력하세요.",
    OVER_RANGE: "[ERROR] 1부터 45까지 숫자 중 입력하세요.",
    NOT_INTEGER: "[ERROR] 정수를 입력하세요.",
  },

  LOTTO_COST: {
    NAN: "[ERROR] 숫자를 입력해 주세요.",
    NOT_THOUSAND: "[ERROR] 1000원 단위로 입력해 주세요.",
    NEGATIVE: "[ERROR] 양의 정수를 입력해 주세요.",
  },
};

function parseAnswerInput(userInput) {
  return userInput.split(",").map((singleUserInput) => Number(singleUserInput));
}

function parseBonusInput(userInput) {
  return Number(userInput);
}

function parsePrintNumber(numbers) {
  return `[${numbers.join(", ")}]`;
}

function getPercentage(numerator, denominator) {
  return ((100 * numerator) / denominator).toFixed(1);
}

module.exports = {
  CONSTANT,
  ERROR_MESSAGE,
  WINMESSAGE,
  WINMONEY,
  parseAnswerInput,
  parseBonusInput,
  parsePrintNumber,
  getPercentage,
};
