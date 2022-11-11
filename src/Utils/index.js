const { Console, Random } = require('@woowacourse/mission-utils');

/**
 * @classdesc 유틸리티 클래스
 */
class Utils {
  /**
   * @param {string} query - console question string
   * @param {function} callBack - Functions that handle input values
   * @description 비동기적으로 readline을 받아오는 메소드
   */

  static async asyncLine(query, callBack) {
    let input = await new Promise((resolve) => {
      Console.readLine(query, resolve);
    });
    if (callBack) input = callBack(input);
    return input;
  }

  /**
   * @param {string} query - console question string
   * @description 투입한 금액이 1000원 단위가 아니면 에러를 발생시키는 메소드
   */

  static isMoney(nums) {
    if (isNaN(nums)) throw new Error('숫자만 입력해주세요.');
    if (nums % 1000 !== 0) throw new Error('1000원 단위로 입력해주세요.');
    if (nums === 0) throw new Errpr('금액은 0원 이상 입력해주세요.');
    return nums;
  }

  /**
   * @param {string} input
   * @returns {Six Number Array}
   * @description 당첨번호를 입력받아서 유효성 검사를 하고, 유효한 당첨번호를 반환하는 메소드
   */

  static isWining(input) {
    if (!input.includes(',') || input.split(',').length !== 6)
      throw new Error(',를 포함하여 6자리를 입력해주세요.');
    return input.split(',').map((num) => Number(num));
  }

  /**
   * @param {string} input
   * @returns {Number}
   * @description 보너스 번호를 입력받아서 유효성 검사를 하고, 유효한 보너스 번호를 반환하는 메소드
   */

  static isBonus(input) {
    if (isNaN(input)) throw new Error('숫자만 입력해주세요.');
    return Number(input);
  }
}

module.exports = Utils;
