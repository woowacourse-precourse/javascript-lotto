const { AMOUNT_UNIT, NUMBER_COUNT, MIN_NUMBER, MAX_NUMBER } = require('../utils/constants');

const ERROR = Object.freeze({
  INVALID_AMOUNT_INPUT: `[ERROR] 유효하지 않은 입력입니다. 구입금액은 ${AMOUNT_UNIT}단위의 숫자로만 입력해야 합니다.`,
  INVALID_WINNING_NUMBER_INPUT: '[ERROR] 유효하지 않은 입력입니다. 당첨 번호는 숫자와 쉼표만 입력할 수 있습니다.',
  INVALID_BONUS_NUMBER_INPUT:
    '[ERROR] 유효하지 않은 입력입니다. 보너스 번호는 중복되지 않은 한 가지의 숫자만 입력할 수 있습니다.',
  INVALID_NUMBER_COUNT: `[ERROR] 로또 번호는 ${NUMBER_COUNT}개여야 합니다.`,
  OUT_OF_RANGE: `[ERROR] 로또 번호는 ${MIN_NUMBER}부터 ${MAX_NUMBER} 사이의 숫자여야 합니다.`,
  DUPLICATED: '[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.',
});

class InvalidAmountInputError extends Error {
  constructor() {
    super();
    this.message = ERROR.INVALID_AMOUNT_INPUT;
  }
}

class InvalidWinningNumbersInputError extends Error {
  constructor() {
    super();
    this.message = ERROR.INVALID_WINNING_NUMBER_INPUT;
  }
}

class InvalidBonusNumberInputError extends Error {
  constructor() {
    super();
    this.message = ERROR.INVALID_BONUS_NUMBER_INPUT;
  }
}

class IndivisibleError extends Error {
  constructor() {
    super();
    this.message = ERROR.INVALID_AMOUNT_INPUT;
  }
}

class InvalidLottoNumberCountError extends Error {
  constructor() {
    super();
    this.message = ERROR.INVALID_NUMBER_COUNT;
  }
}

class InvalidLottoNumberRangeError extends Error {
  constructor() {
    super();
    this.message = ERROR.OUT_OF_RANGE;
  }
}

class DuplicatedLottoNumberError extends Error {
  constructor() {
    super();
    this.message = ERROR.DUPLICATED;
  }
}

module.exports = {
  InvalidAmountInputError,
  InvalidWinningNumbersInputError,
  InvalidBonusNumberInputError,
  IndivisibleError,
  InvalidLottoNumberCountError,
  InvalidLottoNumberRangeError,
  DuplicatedLottoNumberError,
};
