const {
  ERROR_MESSAGE,
  BONUS_NUMBER,
  PURCHASE_MONEY,
  MONEY,
  LOTTO,
} = require('./const');

const checkValue = {
  money(money) {
    if (isNaN(money)) return { errorMsg: createErrorMsg.type(PURCHASE_MONEY) };

    if (money < MONEY.MIN) return { errorMsg: ERROR_MESSAGE.MIN_MONEY };

    if (money % MONEY.UNIT) return { errorMsg: ERROR_MESSAGE.UNIT_MONEY };

    return { errorMsg: undefined };
  },

  numbers(numbers, name) {
    if (!isNumberType(numbers)) return { errorMsg: createErrorMsg.type(name) };

    if (
      numbers.length !== LOTTO.NUMBERS_COUNT ||
      [...new Set(numbers)].length !== LOTTO.NUMBERS_COUNT
    )
      return {
        errorMsg: createErrorMsg.length(name),
      };

    if (!isCorrectRange(numbers))
      return {
        errorMsg: createErrorMsg.range(name),
      };

    return { errorMsg: undefined };
  },

  bonusNumber(number, winningNumbers) {
    if (isNaN(number)) return { errorMsg: createErrorMsg.type(BONUS_NUMBER) };

    if (winningNumbers.includes(number))
      return {
        errorMsg: ERROR_MESSAGE.INCLUDE_WINNING_NUMBER,
      };

    if (number > LOTTO.MAX_NUMBER || number < LOTTO.MIN_NUMBER)
      return {
        errorMsg: createErrorMsg.range(BONUS_NUMBER),
      };

    return { errorMsg: undefined };
  },
};

const isNumberType = (numbers) => {
  return numbers.every((number) => !isNaN(number));
};

const isCorrectRange = (numbers) => {
  return numbers.every(
    (number) => number <= LOTTO.MAX_NUMBER && number >= LOTTO.MIN_NUMBER
  );
};

const createErrorMsg = {
  range: (name) => {
    return `[ERROR] ${name}: ${LOTTO.MIN_NUMBER}~${LOTTO.MAX_NUMBER} 사이의 값만 입력할 수 있습니다.`;
  },

  type: (name) => {
    return `[ERROR] ${name}: 숫자만 입력할 수 있습니다.`;
  },

  length: (name) => {
    return `[ERROR] ${name}: 중복되지 않은 ${LOTTO.NUMBERS_COUNT}개의 숫자로 이루어져야 합니다.`;
  },
};

module.exports = checkValue;
