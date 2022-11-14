const MissionUtils = require('@woowacourse/mission-utils');

class Application {
  static validateNumber(target) {
    if (Number.isNaN(target)) {
      throw new TypeError('[ERROR] 전달된 인수는 숫자로 변환이 가능해야 합니다.');
    }
  }

  static validateArray(target) {
    if (!Array.isArray(target)) {
      throw new TypeError('[ERROR] 전달된 인수는 배열 타입만 가능 합니다.');
    }
  }

  static validateArrayLength(numbers, criterion) {
    if (numbers.length !== criterion) {
      throw new Error(`[ERROR] 배열의 길이는 ${criterion}개여야 합니다.`);
    }
  }

  static validateInteger(number) {
    if (!Number.isInteger(number)) {
      throw new Error('[ERROR] 주어진 값이 정수여야 합니다.');
    }
  }

  static convertNumber(target) {
    const DECIMAL_NUMBER = 10;
    const result = parseInt(target, DECIMAL_NUMBER);

    this.validateNumber(result);

    return result;
  }

  static purchaseCount(purchaseAmount, criterion) {
    const result = this.convertNumber(purchaseAmount) / this.convertNumber(criterion);

    this.validateInteger(result);

    return result;
  }

  static earningsRate(purchaseAmount, earnings) {
    const HUNDRED = 100;
    const result = (this.convertNumber(earnings) / this.convertNumber(purchaseAmount)) * HUNDRED;

    return Math.round(result * HUNDRED) / HUNDRED;
  }

  static sortAscending(target) {
    this.validateArray(target);

    return target.sort((targetA, targetB) => targetA - targetB);
  }

  static checkArrayDuplicate(array) {
    if (new Set(array).size !== array.length) {
      throw new Error('[ERROR] 중복되는 요소는 포함할 수 없습니다.');
    }
  }

  static createUniqueNumbers(start, end, length) {
    const result = MissionUtils.Random.pickUniqueNumbersInRange(start, end, length);

    return result;
  }

  static isMatcheCount(count, datumPoint) {
    return count === datumPoint;
  }

  static copyArray(array) {
    const newArray = [...array];

    return newArray;
  }

  static add(targetA, targetB) {
    return this.convertNumber(targetA) + this.convertNumber(targetB);
  }

  static multiplication(targetA, targetB) {
    return this.convertNumber(targetA) * this.convertNumber(targetB);
  }

  static increase(array, point, increase) {
    const newArray = Application.copyArray(array);

    newArray[point] += increase;

    return newArray;
  }
}

module.exports = Application;
