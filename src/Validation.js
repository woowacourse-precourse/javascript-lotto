const { Console } = require('@woowacourse/mission-utils');
const { VALIDATION_MESSAGE } = require('./setting/Message');
const { VALIDATION_VALUE } = require('./setting/Constants');

class Validation {
  static validate(numbers) {
    if (Validation.isThatEmpty(numbers)) {
      Console.close();
      throw new Error(VALIDATION_MESSAGE.NO_VALUE);
    }
    if (!Validation.itThatRightFormat(numbers)) {
      Console.close();
      throw new Error(VALIDATION_MESSAGE.WRONG_FORMAT);
    }
    if (!Validation.isThatSix(numbers)) {
      Console.close();
      throw new Error(VALIDATION_MESSAGE.NO_SIX);
    }
    if (Validation.numberNet(numbers)) {
      Console.close();
      throw new Error(VALIDATION_MESSAGE.WRONG_NUMBER);
    }
    if (Validation.isThatDuplicate(numbers)) {
      Console.close();
      throw new Error(VALIDATION_MESSAGE.DUPLICATE);
    }
  }
  

  static bonusValidate(numbers, number) {
    if (!Validation.itThatNumber(number)) {
      Console.close();
      throw new Error(VALIDATION_MESSAGE.WRONG_VALUE);
    }
    if (!Validation.singleNumberNet(number)) {
      Console.close();
      throw new Error(VALIDATION_MESSAGE.WRONG_NUMBER_SINGLE);
    }
    if (!Validation.isThatInclude(numbers, number)) {
      Console.close();
      throw new Error(VALIDATION_MESSAGE.DUPLICATE_SINGLE);
    }
  }

  static isThatEmpty(numbers) {
    return numbers.length === VALIDATION_VALUE.empty;
  }

  static isThatSix(numbers) {
    return numbers.length === VALIDATION_VALUE.six;
  }

  static isThatDuplicate(numbers) {
    return numbers.length !== new Set(numbers).size;
  }

  static itThatRightFormat(numbers) {
    const RegExp = VALIDATION_VALUE.arrayFormat;
    return RegExp.test(numbers);
  }

  static numberNet(numbers) {
    const validNumber = numbers.filter((number) => number > VALIDATION_VALUE.min && number < VALIDATION_VALUE.max);
    return numbers.length !== validNumber.length;
  }

  static itThatNumber(number) {
    const RegExp = VALIDATION_VALUE.numberFormat;
    return RegExp.test(number);
  }

  static singleNumberNet(number) {
    return number > VALIDATION_VALUE.min && number < VALIDATION_VALUE.max;
  }

  static isThatInclude(numbers, number) {
    return !numbers.includes(number);
  }
}

module.exports = Validation;
