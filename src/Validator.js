const { rest } = require('./utils/calculator');
const { ERROR_MESSAGES } = require('./common/messages');
const { LOTTO_INFO } = require('./common/constants');

class Validator {
  static checkValidMoney(money) {
    if (money < 0) {
      throw new Error(`${ERROR_MESSAGES.INVALID_NEGATIVE_NUMBER}`);
    }
    if (!Number(money) || money === ' ') {
      throw new Error(`${ERROR_MESSAGES.INVALID_EMPTY_INPUT}`);
    }
    if (rest(money) > 0) {
      throw new Error(`${ERROR_MESSAGES.INVALID_REST_MONEY}`);
    }
    if (money.includes('e') || Number.isNaN(Number(money))) {
      throw new Error(`${ERROR_MESSAGES.INVALID_NOT_MONEY}`);
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

  static checkWinNumbers(winNumbers) {
    const checkList = [
      this.#checkValidWinNumbers,
      this.#checkWinNumbersLenght,
      this.#checkWinNumbersRange,
    ];
    checkList.forEach((checkValid) => {
      checkValid(winNumbers);
    });
  }

  static #checkValidWinNumbers(winNumbers) {
    const removalSeparatorNumbers = winNumbers.split(',').join('');
    const isNotNumber = Number.isNaN(Number(removalSeparatorNumbers));
    if (isNotNumber) {
      throw new Error(`${ERROR_MESSAGES.INVALID_INPUT}`);
    }
  }

  static #checkWinNumbersLenght(winNumbers) {
    const splitNumberLength = winNumbers.split(',').length;
    if (String(splitNumberLength) !== `${LOTTO_INFO.COUNT}`) {
      throw new Error(`${ERROR_MESSAGES.INVALID_LOTTO_COUNT}`);
    }
  }

  static #checkWinNumbersRange(winNumbers) {
    const splitNumber = winNumbers.split(',');
    splitNumber.forEach((number) => {
      if (number < LOTTO_INFO.BEGIN_NUMBER || number > LOTTO_INFO.END_NUMBER) {
        throw new Error(`${ERROR_MESSAGES.INVALID_LOTTO_NUMBER_RANGE}`);
      }
    });
  }

  static checkValidBonusNumber(bonusNumber) {
    if (bonusNumber < 0) {
      throw new Error(`${ERROR_MESSAGES.INVALID_NEGATIVE_NUMBER}`);
    }
  }

  static checkBonusNumberRange(bonusNumber) {} // 1~45 사이 숫자인지 확인
  static checkDuplicateBonusNumber(bonusNumber) {} // 당첨 번호랑 중복있는지 확인
}

module.exports = Validator;
