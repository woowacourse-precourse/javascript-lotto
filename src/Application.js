const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class Application {

  static convertNumber(target) {
    const DECIMAL_NUMBER = 10;
    const result = parseInt(target, DECIMAL_NUMBER);

    return result;
  }

  static purchaseCount(purchaseAmount, criterion) {

    const result = this.convertNumber(purchaseAmount) / this.convertNumber(criterion);

    Lotto.validate(result);
    return result;
  }

  static earningsRate(purchaseAmount, earnings) {
    const HUNDRED = 100;
    const result = (this.convertNumber(earnings) / this.convertNumber(purchaseAmount)) * HUNDRED;

    return Math.round(result * HUNDRED) / HUNDRED;
  }

  static sortAscending(target){
    Lotto.validate(target);
    const sortedtarget = target.sort(((targetA, targetB) => targetA - targetB));

    return sortedtarget;
  }

  static checkArrayDuplicate(array) {
    if (new Set(array).size !== array.length) {
      throw new Error("[ERROR] 중복되는 요소는 포함할 수 없습니다.");
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
}

module.exports = Application;