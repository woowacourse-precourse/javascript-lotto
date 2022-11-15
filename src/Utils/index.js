const { Console, Random } = require('@woowacourse/mission-utils');
const validate = require('./validate');

/**
 * @classdesc 유틸리티 클래스
 */
class Utils {
  /**
   * @returns {number} 1~45 사이의 랜덤한 숫자
   */
  static genRndNums() {
    return Random.pickUniqueNumbersInRange(1, 49, 6).sort((a, b) => a - b);
  }

  /**
   * @param {string} query - console question string
   * @param {function} callBack - Functions that handle input values
   * @description 비동기적으로 readline을 받아오는 메소드
   */
  static asyncLine(query, callBack) {
    return Console.readLine(query, callBack);
  }

  /**
   *
   * @param {Number} inputs
   * @returns validation check를 통과한 Input값
   */
  static isMoney(inputs) {
    validate.OnlyInputNum(inputs);
    validate.LottoPriceCheck(inputs);
    return inputs;
  }

  /**
   * @param {Number Array} input
   * @returns  validation check를 통과한 Number Array
   */
  static isWinNums(input) {
    validate.Comma(input);
    const inputArr = input.split(',');
    validate.Length(inputArr, 6);
    validate.ArrOnlyInputNum(inputArr);
    validate.ArrOverlap(inputArr);
    validate.ArrRange(inputArr, 1, 45);

    return input.split(',').map((num) => Number(num));
  }

  /**
   * @param {string} input
   * @returns {Number}
   * @description 보너스 번호를 입력받아서 유효성 검사를 하고, 유효한 보너스 번호를 반환하는 메소드
   */
  static isBonus(input, winNums) {
    validate.OnlyInputNum(input);
    validate.Range(input, 1, 45);
    validate.DupNumber(input, winNums);
    return Number(input);
  }
}

module.exports = Utils;
