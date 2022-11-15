const { Console } = require('@woowacourse/mission-utils');

class Validation {
  static validate(numbers) {
    if (Validation.isThatEmpty(numbers)) {
      Console.log('[ERROR] 값을 입력해주세요.')
    }
    if (!Validation.itThatRightFormat(numbers)) {
      Console.close();
      throw new Error('[ERROR] 올바른 형식으로 입력해주세요.');
    }
    if (!Validation.isThatSix(numbers)) {
      Console.close();
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (Validation.numberNet(numbers)) {
      Console.close();
      throw new Error('[ERROR] 1과 45사이의 숫자를 입력해주세요.');
    }
    if (Validation.isThatDuplicate(numbers)) {
      Console.close();
      throw new Error('[ERROR] 중복되는 숫자가 존재합니다.');
    }
  }
  

  static bonusValidate(numbers, number) {
    if (!Validation.itThatNumber(number)) {
      Console.close();
      throw new Error('[ERROR] 1개의 보너스 숫자를 입력해주세요.');
    }
    if (!Validation.singleNumberNet(number)) {
      Console.close();
      throw new Error('[ERROR] 1과 45사이의 숫자를 입력해주세요.');
    }
    if (!Validation.isThatInclude(numbers, number)) {
      Console.close();
      throw new Error('[ERROR] 당첨 번호와 값이 중복됩니다.');
    }
  }

  static isThatEmpty(numbers) {
    return numbers.length === 0;
  }

  static isThatSix(numbers) {
    return numbers.length === 6;
  }

  static isThatDuplicate(numbers) {
    return numbers.length !== new Set(numbers).size;
  }

  static itThatRightFormat(numbers) {
    const RegExp = /^[1-9|,]+$/;
    return RegExp.test(numbers);
  }

  static numberNet(numbers) {
    const validNumber = numbers.filter((number) => number > 0 && number < 46);
    return numbers.length !== validNumber.length;
  }

  static itThatNumber(number) {
    const RegExp = /^[0-9]+$/;
    return RegExp.test(number);
  }

  static singleNumberNet(number) {
    return number > 0 && number < 46;
  }

  static isThatInclude(numbers, number) {
    return !numbers.includes(number);
  }
}

module.exports = Validation;
