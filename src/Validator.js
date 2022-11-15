const { rest } = require('./utils/calculator');
const { ERROR_MESSAGES } = require('./common/messages');
const { LOTTO_INFO } = require('./common/constants');

class Validator {
  static checkValidMoneyBundle(money) {
    this.checkNotNumber(money);
    this.checkNegativeMoney(money);
    this.checkEmptyInput(money);
    this.checkRestMoney(money);
  }

  static checkEmptyInput(input) {
    if (!Number(input) || input === ' ') {
      throw new Error(`${ERROR_MESSAGES.INVALID_EMPTY_INPUT}`);
    }
  }

  static checkNegativeMoney(money) {
    if (money < 0) {
      throw new Error(`${ERROR_MESSAGES.INVALID_NEGATIVE_NUMBER}`);
    }
  }

  static checkRestMoney(money) {
    if (rest(money) > 0) {
      throw new Error(`${ERROR_MESSAGES.INVALID_REST_MONEY}`);
    }
  }

  static checkNotNumber(money) {
    if (money.includes('e') || Number.isNaN(Number(money))) {
      throw new Error(`${ERROR_MESSAGES.INVALID_NUMBER}`);
    }
  }

  static checkValidLottoLength(lotto) {
    if (lotto.length > `${LOTTO_INFO.COUNT}`) {
      throw new Error(`${ERROR_MESSAGES.INVALID_LOTTO_COUNT}`);
    }
  }

  static checkDuplicateNumber(lotto) {
    const removalDuplicateNumber = [...new Set(lotto)];
    if (String(removalDuplicateNumber.length) !== `${LOTTO_INFO.COUNT}`) {
      throw new Error(`${ERROR_MESSAGES.DUPLICATE_NUMBER}`);
    }
  }

  static checkWinNumbersBundle(winNumbers) {
    this.checkValidWinNumbers(winNumbers);
    this.checkWinNumbersLenght(winNumbers);
    this.checkWinNumbersRange(winNumbers);
  }

  static checkValidWinNumbers(winNumbers) {
    if (winNumbers.includes('.')) {
      throw new Error(`${ERROR_MESSAGES.INVALID_INPUT}`);
    }
    const removalSeparatorNumbers = winNumbers.split(',').join('');
    const isNotNumber = Number.isNaN(Number(removalSeparatorNumbers));
    if (isNotNumber) {
      throw new Error(`${ERROR_MESSAGES.INVALID_INPUT}`);
    }
  }

  static checkWinNumbersLenght(winNumbers) {
    const splitNumberLength = winNumbers.split(',').length;
    if (String(splitNumberLength) !== `${LOTTO_INFO.COUNT}`) {
      throw new Error(`${ERROR_MESSAGES.INVALID_LOTTO_COUNT}`);
    }
  }

  static checkWinNumbersRange(winNumbers) {
    const splitNumber = winNumbers.split(',');
    splitNumber.forEach((number) => {
      if (number < LOTTO_INFO.BEGIN_NUMBER || number > LOTTO_INFO.END_NUMBER) {
        throw new Error(`${ERROR_MESSAGES.INVALID_LOTTO_NUMBER_RANGE}`);
      }
    });
  }

  static checkValidBonusNumberBundle(bonusNumber) {
    this.checkNotNumber(bonusNumber);
    this.checkNegativeBonusNumber(bonusNumber);
    this.checkEmptyInput(bonusNumber);
    this.checkBonusNumberRange(bonusNumber);
  }

  static checkNotNumber(bonusNumber) {
    if (bonusNumber.includes('e') || Number.isNaN(Number(bonusNumber))) {
      throw new Error(`${ERROR_MESSAGES.INVALID_NUMBER}`);
    }
  }

  static checkNegativeBonusNumber(bonusNumber) {
    if (bonusNumber < 0) {
      throw new Error(`${ERROR_MESSAGES.INVALID_NEGATIVE_NUMBER}`);
    }
  }

  static checkBonusNumberRange(bonusNumber) {
    if (bonusNumber < LOTTO_INFO.BEGIN_NUMBER || bonusNumber > LOTTO_INFO.END_NUMBER) {
      throw new Error(`${ERROR_MESSAGES.INVALID_LOTTO_NUMBER_RANGE}`);
    }
  }

  static checkDuplicateBonusNumber(winNumbers, bonusNumber) {
    const lottos = [...winNumbers.split(','), bonusNumber];
    const removalDuplicateNumber = [...new Set(lottos)];
    if (removalDuplicateNumber.length !== LOTTO_INFO.TOTAL_COUNT) {
      throw new Error(`${ERROR_MESSAGES.DUPLICATE_NUMBER}`);
    }
  }
}

module.exports = Validator;
