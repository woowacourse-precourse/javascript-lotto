const ERROR_MESSAGE = require('./utils/ErrorMessage');
const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_CONSTANT, LOTTO_REGEX } = require('./utils/constants');

class Validator {
  static checkThousands(money) {
    if (!money.match(LOTTO_REGEX.price)) {
      Console.close();
      throw new Error(ERROR_MESSAGE.priceOnlyThousands);
    }

    return true;
  }

  static checkNumberInRange(number) {
    if (!String(number).match(LOTTO_REGEX.lottoNumber)) {
      Console.close();
      throw new Error(ERROR_MESSAGE.lottoNumberRange);
    }

    return true;
  }

  static checkBonusNumberNotDuplicated(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber)) {
      Console.close();
      throw new Error(ERROR_MESSAGE.lottoNotDuplicated);
    }

    return true;
  }

  static checkLottoNumberListLength(numbers) {
    if (numbers.length !== LOTTO_CONSTANT.numbersLength) {
      Console.close();
      throw new Error(ERROR_MESSAGE.lottoNumbersLength);
    }

    return true;
  }

  static checkNumberListNotDuplicated(numbers) {
    if (numbers.length !== new Set([...numbers]).size) {
      Console.close();
      throw new Error(ERROR_MESSAGE.lottoNotDuplicated);
    }

    return true;
  }

  static checkNumberListInRange(numbers) {
    return numbers.every((number) => Validator.checkNumberInRange(number));
  }
}

module.exports = Validator;
