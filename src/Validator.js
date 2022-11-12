const { rest } = require('./utils/calculator');
const { ERROR_MESSAGES } = require('./common/messages');
const { LOTTO_INFO } = require('./common/constants');

class Validator {
  static checkValidMoney(money) {
    if (rest(money) > 0) {
      throw new Error(`${ERROR_MESSAGES.INVALID_MONEY}`);
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

  static checkValidWinNumbers(winNumbers) {
    const splitNumberLength = winNumbers.split(',').length;
    const isNotNumber = Number.isNaN(Number(winNumbers));
    if (String(splitNumberLength) !== `${LOTTO_INFO.COUNT}` && isNotNumber) {
      throw new Error(`${ERROR_MESSAGES.INVALID_INPUT}`);
    }
  }

  static checkWinNumbersLenght(winNumbers) {
    const splitNumberLength = winNumbers.split(',').length;
    if (String(splitNumberLength) !== `${LOTTO_INFO.COUNT}`) {
      throw new Error(`${ERROR_MESSAGES.INVALID_LOTTO_COUNT}`);
    }
  }

  static checkWinNumbersSeparator(winNumbers) {
    const splitNumberLength = winNumbers.match(/,/g, '').length;
    if (String(splitNumberLength) !== `${LOTTO_INFO.COUNT - 1}`) {
      throw new Error(`${ERROR_MESSAGES.INVALID_SEPARATOR}`);
    }
  }

  static checkWinNumbersRange(winNumbers) {
    const splitNumber = winNumbers.split(',');
    splitNumber.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error(`${ERROR_MESSAGES.INVALID_LOTTO_NUMBER_RANGE}`);
      }
    });
  }
}

module.exports = Validator;
