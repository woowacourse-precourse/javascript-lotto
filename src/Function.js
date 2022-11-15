const MissionUtils = require('@woowacourse/mission-utils');
const TEN = 10;
const HUNDRED = 100;

class Function {
  static checkNumber(input) {
    if (Number.isNaN(input)) {
      throw new TypeError('[ERROR] 올바른 숫자를 입력하세요.');
    }
  }

  static checkArray(input) {
    if (!Array.isArray(input)) {
      throw new TypeError('[ERROR] 올바른 배열을 입력하세요.');
    }
  }

  static checkArrayLength(numbers, length) {
    if (numbers.length !== length) {
      throw new Error(`[ERROR] 올바른 배열의 크기로 입력하세요.`);
    }
  }

  static checkInteger(number) {
    if (!Number.isInteger(number)) {
      throw new Error('[ERROR] 올바른 숫자를 입력하세요.');
    }
  }

  static checkArrayDuplicate(array) {
    if (new Set(array).size !== array.length) {
      throw new Error('[ERROR] 중복되지 않게 입력하세요.');
    }
  }

  static convertNumber(input) {
    const result = parseInt(input, TEN);
    this.checkNumber(result);
    return result;
  }

  static countLotto(purchaseAmount, length) {
    const result = this.convertNumber(purchaseAmount) / this.convertNumber(length);

    this.checkInteger(result);

    return result;
  }

  static earning(purchaseAmount, earnings) {
    const result = (this.convertNumber(earnings) / this.convertNumber(purchaseAmount)) * HUNDRED;
    return Math.round(result * HUNDRED) / HUNDRED;
  }

  static sortAscending(input) {
    this.checkArray(input);
    return input.sort((inputX, inputY) => inputX - inputY);
  }

  static createUniqueNumbers(start, end, length) {
    return MissionUtils.Random.pickUniqueNumbersInRange(start, end, length);;
  }

  static checkCount(count, matches) {
    return count === matches;
  }

  static copyArray(array) {
    const newArray = [...array];

    return newArray;
  }

  static add(inputX, inputY) {
    return this.convertNumber(inputX) + this.convertNumber(inputY);
  }

  static multiply(inputX, inputY) {
    return this.convertNumber(inputX) * this.convertNumber(inputY);
  }

  static increaseIndex(array, index, increase) {
    const newArray = Function.copyArray(array);
    newArray[index] += increase;
    return newArray;
  }
}

module.exports = Function;